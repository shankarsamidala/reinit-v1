'use client';

import { useRef } from 'react';
import { Job } from '@/core/types/job';
import { Button } from '@/components/ui/button';
import FeaturedJobCard from './FeaturedJobCard';

interface FeaturedJobsCarouselProps {
  jobs: Job[];
}

export default function FeaturedJobsCarousel({ jobs }: FeaturedJobsCarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section aria-label="Featured jobs" className="w-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Featured Jobs</h2>
        <div className="flex gap-2">
          <Button 
            onClick={scrollPrev}
            variant="outline"
            size="icon"
            aria-label="Previous featured jobs" 
            className="border-black hover:shadow-custom-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </Button>
          <Button 
            onClick={scrollNext}
            variant="outline"
            size="icon"
            aria-label="Next featured jobs" 
            className="border-black hover:shadow-custom-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {jobs.map((job) => (
            <FeaturedJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}