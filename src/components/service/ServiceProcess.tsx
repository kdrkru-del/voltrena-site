'use client';

import StepsGrid from '@/components/service/StepsGrid';

export interface ServiceProcessStep {
  number: string;
  title: string;
  description?: string;
}

export interface ServiceProcessProps {
  steps: ServiceProcessStep[];
  id?: string;
  tag?: string;
  title?: string;
  description?: string;
}

export default function ServiceProcess({
  steps,
  id,
  tag,
  title = 'От идеи до работающего сайта.',
  description,
}: ServiceProcessProps) {
  return <StepsGrid steps={steps} id={id} tag={tag} title={title} description={description} />;
}
