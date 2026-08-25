import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

// Lazy load sections below the fold for performance
const GrowthSystem = dynamic(() => import('@/components/sections/GrowthSystem'), {
  loading: () => <SectionSkeleton />,
});
const Capabilities = dynamic(() => import('@/components/sections/Capabilities'), {
  loading: () => <SectionSkeleton />,
});
const ConnectedSystem = dynamic(() => import('@/components/sections/ConnectedSystem'), {
  loading: () => <SectionSkeleton />,
});
const Solutions = dynamic(() => import('@/components/sections/Solutions'), {
  loading: () => <SectionSkeleton />,
});
const Services = dynamic(() => import('@/components/sections/Services'), {
  loading: () => <SectionSkeleton />,
});
const Cases = dynamic(() => import('@/components/sections/Cases'), {
  loading: () => <SectionSkeleton />,
});
const Process = dynamic(() => import('@/components/sections/Process'), {
  loading: () => <SectionSkeleton />,
});
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'), {
  loading: () => <SectionSkeleton />,
});

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <GrowthSystem />
      <Capabilities />
      <ConnectedSystem />
      <Solutions />
      <Services />
      <Cases />
      <Process />
      <FinalCTA />
    </>
  );
}
