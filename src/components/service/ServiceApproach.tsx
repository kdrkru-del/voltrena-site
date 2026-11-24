'use client'

import StepsGrid from '@/components/service/StepsGrid'

export interface ApproachStep {
  number: string
  title: string
  description: string
}

interface ServiceApproachProps {
  steps: ApproachStep[]
  id?: string
  tag?: string
  title?: string
  description?: string
}

export default function ServiceApproach({ steps, id, tag, title = 'Начинаем не с дизайна.', description }: ServiceApproachProps) {
  return <StepsGrid steps={steps} id={id} tag={tag} title={title} description={description} />
}
