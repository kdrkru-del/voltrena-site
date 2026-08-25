export interface Solution {
  id: string;
  title: string;
  components: string[];
  description?: string;
}

export const solutions: Solution[] = [
  {
    id: 'lead-generation',
    title: 'Lead Generation System',
    components: ['Landing', 'Ads', 'Analytics', 'CRM'],
    description: 'End-to-end system that attracts, captures, and qualifies leads automatically.',
  },
  {
    id: 'b2b-lead-machine',
    title: 'B2B Lead Machine',
    components: ['Target companies', 'Data collection', 'Enrichment', 'Outreach', 'Automation'],
    description: 'Automated B2B pipeline from target identification to first contact.',
  },
  {
    id: 'ai-sales-manager',
    title: 'AI Sales Manager',
    components: ['AI Agent', 'Knowledge Base', 'CRM', 'Telegram / Website', 'Lead Qualification'],
    description: 'AI-powered sales assistant that qualifies and routes leads 24/7.',
  },
  {
    id: 'digital-intelligence',
    title: 'Digital Intelligence',
    components: ['Market data', 'Competitors', 'Prices', 'Monitoring', 'Dashboards'],
    description: 'Real-time market and competitor intelligence for informed decisions.',
  },
];
