'use client';

import { useState, useMemo } from 'react';
import { Job } from '@/core/types/job';
import { JobFilters } from '@/core/types/filters';
import { Button } from '@/components/ui/button';
import JobGridCard from './JobGridCard';
import FilterChips from '../../job-search/components/FilterChips';


interface JobGridProps {
  jobs: Job[];
  filters: JobFilters;
  onShowMobileFilters?: () => void;
  onFiltersChange?: (filters: JobFilters) => void; // Add this prop
}

export default function JobGrid({ jobs, filters, onShowMobileFilters, onFiltersChange }: JobGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter jobs based on active filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Job Type Filter
      if (filters.jobTypes.length > 0 && !filters.jobTypes.includes(job.type)) {
        return false;
      }

      // Experience Range Filter
      if (job.experience < filters.experienceRange.min || job.experience > filters.experienceRange.max) {
        return false;
      }

      // Salary Range Filter (convert to LPA: salary in thousands / 100)
      const salaryInLPA = job.salaryMin / 100;
      if (salaryInLPA < filters.salaryRange.min || salaryInLPA > filters.salaryRange.max) {
        return false;
      }

      // Location Type Filter (simplified - you can enhance this logic)
      if (filters.locationTypes.length > 0) {
        const isRemote = job.location.toLowerCase().includes('remote');
        const hasRemoteFilter = filters.locationTypes.includes('remote');
        const hasOnSiteFilter = filters.locationTypes.includes('on-site');
        const hasHybridFilter = filters.locationTypes.includes('hybrid');

        if (hasRemoteFilter && isRemote) return true;
        if ((hasOnSiteFilter || hasHybridFilter) && !isRemote) return true;
        if (filters.locationTypes.length > 0 && !hasRemoteFilter && isRemote) return false;
      }

      return true;
    });
  }, [jobs, filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset page when filters change
  useState(() => {
    setCurrentPage(1);
  });

  // Handle filter removal
  const handleRemoveFilter = (filterType: string, value?: string) => {
    if (!onFiltersChange) return;

    const newFilters = { ...filters };

    switch (filterType) {
      case 'jobType':
        newFilters.jobTypes = filters.jobTypes.filter(type => type !== value);
        break;
      case 'locationType':
        newFilters.locationTypes = filters.locationTypes.filter(type => type !== value);
        break;
      case 'experience':
        newFilters.experienceRange = { min: 0, max: 24 };
        break;
      case 'salary':
        newFilters.salaryRange = { min: 0, max: 40 };
        break;
    }

    onFiltersChange(newFilters);
  };

  const handleClearAllFilters = () => {
    if (!onFiltersChange) return;
    
    onFiltersChange({
      jobTypes: [],
      locationTypes: [],
      experienceRange: { min: 0, max: 24 },
      salaryRange: { min: 0, max: 40 }
    });
  };

  return (
    <div className="flex-1">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            All Jobs
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredJobs.length)} of {filteredJobs.length} jobs
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Sort Dropdown */}
          <div className="hidden sm:block">
            <select className="border border-black rounded px-3 py-2 text-sm focus:ring-primary focus:border-primary">
              <option>Most Recent</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
              <option>Most Relevant</option>
            </select>
          </div>

          {/* Mobile Filter Button */}
          <Button
            onClick={onShowMobileFilters}
            variant="outline"
            className="lg:hidden border border-black rounded-lg px-4 py-2 bg-white hover:bg-gray-50 hover:shadow-custom-sm transition-all duration-200 flex items-center space-x-2 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
            </svg>
            <span>Filters</span>
          </Button>
        </div>
      </div>

      {/* Filter Chips */}
      <FilterChips
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        onClearAll={handleClearAllFilters}
      />

      {/* Job Grid */}
      {paginatedJobs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {paginatedJobs.map((job) => (
              <JobGridCard key={job.id} job={job} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border-black hover:shadow-custom-sm"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Previous
              </Button>

              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      onClick={() => handlePageChange(pageNum)}
                      className={currentPage === pageNum 
                        ? "bg-primary hover:bg-primary/90" 
                        : "border-black hover:shadow-custom-sm"
                      }
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border-black hover:shadow-custom-sm"
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.901-6.06 2.375l-.17.158.5.5A7.975 7.975 0 0112 21c2.34 0 4.47-.901 6.06-2.375l.17-.158-.5-.5z"/>
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
}