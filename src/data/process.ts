export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Business, market, customer journey.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Architecture, funnel and solution.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Website, automation, data systems.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Traffic, integrations and analytics.',
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'Conversion, cost, workflows and revenue.',
  },
];
