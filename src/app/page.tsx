import Header from '@/shared/components/layout/Header';
import Footer from '@/shared/components/layout/Footer';
import FeaturedJobsCarousel from '@/features/job-listings/components/FeaturedJobsCarousel';
import JobSearchPage from '@/features/job-search/components/JobSearchPage';
import { featuredJobs } from '@/core/data/allJobs';

export default function Home() {
  return (
    <div className="bg-custom-bg min-h-screen flex flex-col">
      <Header />
        {/* Job Categories Section */}
     
      <main className="flex-1 w-full px-4 sm:px-6 xl:px-12 2xl:px-16 py-4 sm:py-6 space-y-8">
        {/* Featured Jobs Section */}
        <FeaturedJobsCarousel jobs={featuredJobs} />
        
    
        {/* Main Job Search Section */}
        <JobSearchPage />
      </main>
      <Footer />
    </div>
  );
}