'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import JobFiltersSidebar from './JobFiltersSidebar';
import JobGrid from '../../../features/job-listings/components/JobGrid';
import { JobFilters, defaultFilters } from '@/core/types/filters';
import { allJobs } from '@/core/data/allJobs';

export default function JobSearchPage() {
  const [filters, setFilters] = useState<JobFilters>(defaultFilters);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFiltersChange = (newFilters: JobFilters) => {
    setFilters(newFilters);
  };

  const handleApplyFilters = () => {
    // Filters are applied automatically through state
    console.log('Filters applied:', filters);
    // Close mobile filters after applying
    setIsMobileFiltersOpen(false);
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  const handleShowMobileFilters = () => {
    setIsMobileFiltersOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* Desktop Filters Sidebar */}
      <JobFiltersSidebar
        filters={filters}
        onFiltersChange={handleFiltersChange}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
      />

      {/* Mobile Filters Sheet */}
      <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
        <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
          <SheetHeader className="pb-4">
            <SheetTitle>Filter Jobs</SheetTitle>
          </SheetHeader>
          <div className="lg:hidden">
            <MobileJobFiltersSidebar
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onApplyFilters={handleApplyFilters}
              onClearFilters={handleClearFilters}
            />
          </div>
        </SheetContent>
      </Sheet>

      {/* Job Grid with Filter Change Handler */}
      <JobGrid 
        jobs={allJobs} 
        filters={filters} 
        onShowMobileFilters={handleShowMobileFilters}
        onFiltersChange={handleFiltersChange}
      />
    </div>
  );
}


// Mobile version of filters with ShadCN components
interface MobileJobFiltersSidebarProps {
  filters: JobFilters;
  onFiltersChange: (filters: JobFilters) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
}

function MobileJobFiltersSidebar({
  filters,
  onFiltersChange,
  onApplyFilters,
  onClearFilters
}: MobileJobFiltersSidebarProps) {
  const handleJobTypeChange = (value: string, checked: boolean) => {
    const newJobTypes = checked
      ? [...filters.jobTypes, value]
      : filters.jobTypes.filter(type => type !== value);
    
    onFiltersChange({
      ...filters,
      jobTypes: newJobTypes
    });
  };

  const handleLocationTypeChange = (value: string, checked: boolean) => {
    const newLocationTypes = checked
      ? [...filters.locationTypes, value]
      : filters.locationTypes.filter(type => type !== value);
    
    onFiltersChange({
      ...filters,
      locationTypes: newLocationTypes
    });
  };

  const handleExperienceRangeChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      experienceRange: { min: value[0], max: value[1] }
    });
  };

  const handleSalaryRangeChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      salaryRange: { min: value[0], max: value[1] }
    });
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Job Type */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="font-medium text-gray-700 mb-3">Job Type</h3>
        <div className="space-y-3">
          {[
            { value: 'full-time', label: 'Full-time' },
            { value: 'part-time', label: 'Part-time' },
            { value: 'contract', label: 'Contract' },
            { value: 'internship', label: 'Internship' }
          ].map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                id={`mobile-job-type-${value}`}
                checked={filters.jobTypes.includes(value)}
                onCheckedChange={(checked) => handleJobTypeChange(value, checked as boolean)}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label 
                htmlFor={`mobile-job-type-${value}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="font-medium text-gray-700 mb-4">Experience Level</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span>{filters.experienceRange.min} years</span>
            <span>{filters.experienceRange.max === 24 ? '24+ years' : `${filters.experienceRange.max} years`}</span>
          </div>
          <Slider
            value={[filters.experienceRange.min, filters.experienceRange.max]}
            onValueChange={handleExperienceRangeChange}
            max={24}
            min={0}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      {/* Location */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="font-medium text-gray-700 mb-3">Location</h3>
        <div className="space-y-3">
          {[
            { value: 'remote', label: 'Remote' },
            { value: 'on-site', label: 'On-site' },
            { value: 'hybrid', label: 'Hybrid' }
          ].map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                id={`mobile-location-${value}`}
                checked={filters.locationTypes.includes(value)}
                onCheckedChange={(checked) => handleLocationTypeChange(value, checked as boolean)}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label 
                htmlFor={`mobile-location-${value}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="pb-4">
        <h3 className="font-medium text-gray-700 mb-4">Salary Range</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span>{filters.salaryRange.min}LPA</span>
            <span>{filters.salaryRange.max === 40 ? '40LPA+' : `${filters.salaryRange.max}LPA`}</span>
          </div>
          <Slider
            value={[filters.salaryRange.min, filters.salaryRange.max]}
            onValueChange={handleSalaryRangeChange}
            max={40}
            min={0}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col space-y-3">
        <Button
          onClick={onApplyFilters}
          className="w-full bg-black text-white hover:bg-primary hover:shadow-custom border border-black"
        >
          Apply Filters
        </Button>
        <Button
          onClick={onClearFilters}
          variant="outline"
          className="w-full border-black hover:bg-gray-100 hover:shadow-custom"
        >
          Clear All
        </Button>
      </div>
    </div>
  );
}