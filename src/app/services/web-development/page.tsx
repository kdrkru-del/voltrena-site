import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { webDevelopmentData } from '@/data/service-pages';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: webDevelopmentData.seo.title,
  description: webDevelopmentData.seo.description,
  openGraph: {
    title: webDevelopmentData.seo.title,
    description: webDevelopmentData.seo.description,
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: webDevelopmentData.seo.title,
    description: webDevelopmentData.seo.description,
  },
  alternates: {
    canonical: '/services/web-development',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Lazy-load sections ────────────────────────────────────────────────────────

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

const ServiceHero = dynamic(() => import('@/components/service/ServiceHero'), {
  loading: () => <SectionSkeleton />,
});
const ServiceSaleSystem = dynamic(() => import('@/components/service/ServiceSaleSystem'), {
  loading: () => <SectionSkeleton />,
});
const ServiceTypes = dynamic(() => import('@/components/service/ServiceTypes'), {
  loading: () => <SectionSkeleton />,
});
const ServiceApproach = dynamic(() => import('@/components/service/ServiceApproach'), {
  loading: () => <SectionSkeleton />,
});
const ServiceEcosystem = dynamic(() => import('@/components/service/ServiceEcosystem'), {
  loading: () => <SectionSkeleton />,
});
const ServiceProcess = dynamic(() => import('@/components/service/ServiceProcess'), {
  loading: () => <SectionSkeleton />,
});
const ServiceTechnology = dynamic(() => import('@/components/service/ServiceTechnology'), {
  loading: () => <SectionSkeleton />,
});
const ServiceLeadSystem = dynamic(() => import('@/components/service/ServiceLeadSystem'), {
  loading: () => <SectionSkeleton />,
});
const ServiceUseCases = dynamic(() => import('@/components/service/ServiceUseCases'), {
  loading: () => <SectionSkeleton />,
});
const ServiceIncludes = dynamic(() => import('@/components/service/ServiceIncludes'), {
  loading: () => <SectionSkeleton />,
});
const ServiceFAQ = dynamic(() => import('@/components/service/ServiceFAQ'), {
  loading: () => <SectionSkeleton />,
});
const ServiceCTA = dynamic(() => import('@/components/service/ServiceCTA'), {
  loading: () => <SectionSkeleton />,
});

// ─── JSON-LD Schemas ───────────────────────────────────────────────────────────

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Создание сайтов для бизнеса',
  provider: {
    '@type': 'Organization',
    name: 'VOLTRENA Digital',
    url: 'https://kdrkru-del.github.io/voltrena-site/',
  },
  description: webDevelopmentData.seo.description,
  serviceType: 'Web Development',
  areaServed: 'RU',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: webDevelopmentData.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://kdrkru-del.github.io/voltrena-site/' },
    { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://kdrkru-del.github.io/voltrena-site/services' },
    { '@type': 'ListItem', position: 3, name: 'Создание сайтов' },
  ],
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  const data = webDevelopmentData;

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        ctaPrimary={data.ctaPrimary}
        ctaSecondary={data.ctaSecondary}
        heroFlow={data.heroFlow}
      />

      <ServiceSaleSystem nodes={data.saleSystemNodes} />

      <ServiceTypes types={data.types} />

      <ServiceApproach steps={data.approach} />

      <ServiceEcosystem items={data.ecosystem} />

      <ServiceProcess steps={data.process} />

      <ServiceTechnology technology={data.technology} />

      <ServiceLeadSystem />

      <ServiceUseCases useCases={data.useCases} />

      <ServiceIncludes included={data.included} />

      <ServiceFAQ faq={data.faq} />

      <ServiceCTA />
    </>
  );
}
