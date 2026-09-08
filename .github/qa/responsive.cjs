const { chromium } = require('playwright');
const fs = require('fs');
const http = require('http');
const path = require('path');
const assert = require('assert/strict');
const root = path.resolve('out');
const results = [];
const failures = [];
const watchdog = setTimeout(() => { console.error('QA exceeded five minutes'); process.exit(1); }, 300000);
const sizes = [[320,568],[375,812],[390,844],[430,932],[768,1024],[820,1180],[1024,1366],[1280,720],[1366,768],[1440,900],[1920,1080]];
const routes = [...fs.readFileSync('out/sitemap.xml','utf8').matchAll(/<loc>https:\/\/voltrena.ru([^<]*)<\/loc>/g)].map(match => match[1]);
fs.mkdirSync('qa-results', {recursive:true});
const server = http.createServer((req,res) => {
  let file = path.join(root, decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if (!file.startsWith(root + path.sep) && file !== root) {res.writeHead(403).end();return;}
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file,'index.html');
  if (!fs.existsSync(file)) {res.writeHead(404).end();return;}
  const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
  res.setHeader('Content-Type',types[path.extname(file)] || 'application/octet-stream');
  res.end(fs.readFileSync(file));
});
const base='http://127.0.0.1:8765';
async function run() {
 const { build } = require('esbuild');
 const fixture = path.join(root,'__qa_form');
 fs.mkdirSync(fixture,{recursive:true});
 await build({stdin:{contents:"import React from 'react'; import {createRoot} from 'react-dom/client'; import LeadForm from './src/components/ui/LeadForm'; createRoot(document.getElementById('root')).render(<LeadForm/>);",resolveDir:process.cwd(),loader:'tsx'},bundle:true,outfile:path.join(fixture,'form.js'),jsx:'automatic',define:{'process.env':'{}','process.env.NODE_ENV':'"production"','process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL':JSON.stringify(base+'/__qa_lead')},plugins:[{name:'test-link',setup(build){build.onResolve({filter:/^next\/link$/},()=>({path:'link',namespace:'test'}));build.onLoad({filter:/.*/,namespace:'test'},()=>({contents:"import React from 'react'; export default React.forwardRef((props, ref) => React.createElement('a', {...props, ref}));",resolveDir:process.cwd()}));}}]});
 fs.writeFileSync(path.join(fixture,'index.html'),'<html><body><div id="root"></div><script src="form.js"></script></body></html>');
 await new Promise(resolve=>server.listen(8765,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true});
 try {
  const context=await browser.newContext({reducedMotion:'reduce'});
  await context.route('https://mc.yandex.ru/**',r=>r.abort());
  await context.route('https://formsubmit.co/**',r=>r.fulfill({status:503,body:'{}'}));
  const page=await context.newPage();
  page.setDefaultTimeout(8000);
  const crashes=[];page.on('pageerror',e=>crashes.push({route:page.url(),error:e.message}));
  for (const [width,height] of sizes) {
   await page.setViewportSize({width,height});
   for (const route of routes) {
    try {
    const response=await page.goto(base+route);assert.equal(response.status(),200,route);
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(250);
    assert.equal(await page.locator('h1').evaluate(el=>{for(let node=el;node;node=node.parentElement) if(Number(getComputedStyle(node).opacity)<0.01) return false;return true;}),true,'H1 must remain visible with reduced motion');
    await page.addStyleTag({content:'html { overflow-x: visible !important; scroll-behavior:auto !important; }'});
    const overflow=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,offenders:Array.from(document.querySelectorAll('h1,h2,h3,p,a,button,input,textarea')).filter(el=>{const r=el.getBoundingClientRect();return r.width && getComputedStyle(el).visibility!=='hidden' && (r.right>innerWidth+1 || r.left < -1) && !el.closest('[hidden]');}).map(el=>({tag:el.tagName,text:el.textContent.slice(0,80)})).slice(0,12)}));
    results.push({route,width,height,overflow});
    if (overflow.scroll > width+1) {
      overflow.sources = await page.evaluate(()=>Array.from(document.querySelectorAll('div,span,li,svg')).filter(el=>{const r=el.getBoundingClientRect();return r.width && (r.right>innerWidth+1 || r.left < -1) && !el.closest('[hidden]');}).map(el=>({tag:el.tagName,class:el.getAttribute('class'),text:el.textContent.slice(0,80),right:el.getBoundingClientRect().right})).slice(0,30));
      await page.screenshot({path:`qa-results/overflow-${route.replaceAll('/','_')}-${width}.png`,fullPage:true});
    }
    assert.ok(overflow.scroll <= width+1,JSON.stringify(results.at(-1)));
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://voltrena.ru'+route);
    if (route==='/') {
      await page.getByRole('heading',{level:1,name:/Цифровые системы/}).waitFor();
      await page.getByRole('link',{name:'Выбрать систему',exact:true}).waitFor();
      assert.equal(await page.getByText('SYSTEM ARCHITECTURE',{exact:true}).count(),1);
      for (const name of ['Система привлечения клиентов','Система B2B-продаж','Квалификация и обработка заявок','Автоматизация операционных процессов','Мониторинг рынка и данных']) {
        assert.ok(await page.getByRole('link',{name:new RegExp(name)}).count() >= 1);
      }
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.locator('h1').scrollIntoViewIfNeeded();
      await page.locator('img[loading="lazy"]').evaluateAll(images=>Promise.all(images.map(image=>{image.loading='eager';return image.decode().catch(()=>{});})));
      await page.screenshot({path:`qa-results/home-${width}.png`,fullPage:true});
      if(width<1024) {
        const open=page.getByRole('button',{name:'Открыть меню',exact:true});await open.click();
        const menu=page.locator('#mobile-navigation');
        assert.equal(await menu.evaluate(el=>el.contains(document.activeElement)),true);
        const services=menu.getByRole('button',{name:'Услуги',exact:true});await services.click();
        await page.keyboard.press('Escape');assert.equal(await menu.isVisible(),false);
        assert.equal(await open.evaluate(el=>el===document.activeElement),true);
        await open.click();assert.equal(await services.getAttribute('aria-expanded'),'false');
        await menu.getByRole('link',{name:'О нас',exact:true}).click();
        await page.waitForURL(/\/about\/?$/);
        await page.waitForLoadState('load');
        assert.equal(await menu.isVisible(),false);
      } else {
        const services=page.locator('header').getByRole('button',{name:'Услуги',exact:true});await services.click();
        assert.equal(await page.locator('#desktop-services').isVisible(),true);
        await page.keyboard.press('Escape');assert.equal(await page.locator('#desktop-services').isVisible(),false);
      }
    }
    if(route==='/contact/' && width===390) {
      const form=page.locator('form');await form.getByRole('button',{name:'Обсудить задачу'}).click();
      for(const name of ['name','contact','message']) {
        const field=form.locator(`[name="${name}"]`);assert.equal(await field.getAttribute('aria-invalid'),'true');
        assert.ok(await page.locator(`[id="${await field.getAttribute('aria-describedby')}"]`).textContent());
        await field.fill('QA local only');
      }
      await form.locator('[name="contact"]').press('Enter');
      await form.getByRole('alert').waitFor();
      assert.ok(!(await form.getByRole('alert').textContent()).includes('@romanspes'));
      assert.equal(await form.getByRole('button',{name:'Обсудить задачу'}).isEnabled(),true);
    }
    } catch(error) { failures.push({width,height,route,error:String(error)}); }
   }
  }
  for (const outcome of ['success','http-error','network-error','activation-error','timeout']) {
    const formPage=await context.newPage();let submissions=0;
    await formPage.route('**/__qa_lead',async route=>{
      submissions++;
      if(outcome==='timeout') return;
      await new Promise(resolve=>setTimeout(resolve,200));
      if(outcome==='network-error') return route.abort();
      await route.fulfill({status:outcome==='http-error'?500:200,body:JSON.stringify({success:outcome!=='activation-error',message:outcome==='activation-error'?'Activation required':''})});
    });
    await formPage.goto(base+'/__qa_form/');
    if(outcome==='timeout') await formPage.clock.install();
    for(const name of ['name','contact','message']) await formPage.locator(`[name="${name}"]`).fill('Test only');
    await formPage.locator('[name="contact"]').press('Enter');
    assert.equal(await formPage.getByRole('button').isDisabled(),true);
    await formPage.locator('form').evaluate(form=>{form.requestSubmit();form.requestSubmit();});
    if(outcome==='timeout') await formPage.clock.runFor(16000);
    await formPage.getByRole(outcome==='success'?'status':'alert').waitFor();
    assert.equal(submissions,1);
    if(outcome!=='success') assert.equal(await formPage.getByRole('button').isEnabled(),true);
    await formPage.close();
  }
  const noJS=await browser.newContext({javaScriptEnabled:false});const staticPage=await noJS.newPage();await staticPage.goto(base);
  assert.equal(await staticPage.locator('h1').isVisible(),true);await noJS.close();
  const fallback=await browser.newContext();await fallback.addInitScript(()=>{delete window.IntersectionObserver;});
  const fallbackPage=await fallback.newPage();await fallbackPage.goto(base);assert.equal(await fallbackPage.locator('h1').isVisible(),true);await fallback.close();
  assert.deepEqual(failures,[]);
  assert.deepEqual(crashes,[]);
  console.log(`PASS: ${results.length} route/viewport checks, product hero, menus, form, reduced motion, SSR fallbacks`);
 } finally { clearTimeout(watchdog);fs.writeFileSync('qa-results/results.json',JSON.stringify({results,failures},null,2));fs.rmSync(fixture,{recursive:true,force:true});await browser.close();server.close(); }
}
run().catch(error=>{clearTimeout(watchdog);console.error(error);server.close();process.exitCode=1;});
