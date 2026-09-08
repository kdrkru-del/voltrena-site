const { chromium } = require('playwright');
const fs = require('fs');
const http = require('http');
const path = require('path');
const root = path.resolve('out');
const server = http.createServer((req,res)=>{
  let file=path.join(root,decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory()) file=path.join(file,'index.html');
  if(!fs.existsSync(file)){res.writeHead(404).end();return;}
  const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
  res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));
});
(async()=>{
 await new Promise(r=>server.listen(8766,'127.0.0.1',r));
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:320,height:568},reducedMotion:'reduce'});
 await page.route('https://mc.yandex.ru/**',r=>r.abort());
 await page.goto('http://127.0.0.1:8766/services/web-scraping/');
 await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(500);
 await page.addStyleTag({content:'html { overflow-x:visible !important; }'});
 const data=await page.evaluate(()=>{
   const vw=innerWidth;
   const nodes=[];
   for(const el of document.querySelectorAll('*')){
     const r=el.getBoundingClientRect();
     const s=getComputedStyle(el);
     const own=r.width>0&&(r.right>vw+0.5||r.left<-0.5);
     const scroll=el.scrollWidth>el.clientWidth+1;
     const pseudos=[];
     for(const p of ['::before','::after']){
       const ps=getComputedStyle(el,p);
       if(ps.content!=='none'&&ps.content!=='normal') pseudos.push({p,content:ps.content,width:ps.width,left:ps.left,right:ps.right,transform:ps.transform,position:ps.position});
     }
     if(own||scroll||pseudos.some(x=>x.width!=='auto')) nodes.push({tag:el.tagName,id:el.id,cls:el.getAttribute('class'),left:r.left,right:r.right,width:r.width,client:el.clientWidth,scroll:el.scrollWidth,overflowX:s.overflowX,position:s.position,transform:s.transform,pseudos});
   }
   return {innerWidth:vw,doc:document.documentElement.scrollWidth,body:document.body.scrollWidth,nodes:nodes.filter(n=>n.left<0||n.right>vw||n.scroll>n.client+1||n.pseudos.length).slice(0,200)};
 });
 console.log('OVERFLOW_DEBUG='+JSON.stringify(data));
 await browser.close();server.close();
})().catch(e=>{console.error(e);server.close();process.exit(1)});
