'use client';

import { JobFilters } from '@/core/types/filters';
import { Button } from '@/components/ui/button';

interface FilterChipsProps {
  filters: JobFilters;
  onRemoveFilter: (filterType: string, value?: string) => void;
  onClearAll: () => void;
}

export default function FilterChips({ filters, onRemoveFilter, onClearAll }: FilterChipsProps) {
  const hasActiveFilters = 
    filters.jobTypes.length > 0 ||
    filters.locationTypes.length > 0 ||
    filters.experienceRange.min > 0 ||
    filters.experienceRange.max < 24 ||
    filters.salaryRange.min > 0 ||
    filters.salaryRange.max < 40;

  if (!hasActiveFilters) return null;

  const formatExperienceRange = () => {
    if (filters.experienceRange.min === 0 && filters.experienceRange.max === 24) return null;
    if (filters.experienceRange.min === filters.experienceRange.max) {
      return `${filters.experienceRange.min} years`;
    }
    return `${filters.experienceRange.min}-${filters.experienceRange.max === 24 ? '24+' : filters.experienceRange.max} years`;
  };

  const formatSalaryRange = () => {
    if (filters.salaryRange.min === 0 && filters.salaryRange.max === 40) return null;
    if (filters.salaryRange.min === filters.salaryRange.max) {
      return `${filters.salaryRange.min}LPA`;
    }
    return `${filters.salaryRange.min}-${filters.salaryRange.max === 40 ? '40+' : filters.salaryRange.max}LPA`;
  };

  const experienceText = formatExperienceRange();
  const salaryText = formatSalaryRange();

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 p-4 bg-gray-50 rounded-lg border">
      <span className="text-sm font-medium text-gray-700 mr-2">Active Filters:</span>
      
      {/* Job Types */}
      {filters.jobTypes.map((type) => (
        <FilterChip
          key={type}
          label={type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
          onRemove={() => onRemoveFilter('jobType', type)}
        />
      ))}

      {/* Location Types */}
      {filters.locationTypes.map((type) => (
        <FilterChip
          key={type}
          label={type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
          onRemove={() => onRemoveFilter('locationType', type)}
        />
      ))}

      {/* Experience Range */}
      {experienceText && (
        <FilterChip
          label={`Experience: ${experienceText}`}
          onRemove={() => onRemoveFilter('experience')}
        />
      )}

      {/* Salary Range */}
      {salaryText && (
        <FilterChip
          label={`Salary: ${salaryText}`}
          onRemove={() => onRemoveFilter('salary')}
        />
      )}

      {/* Clear All Button */}
      <Button
        onClick={onClearAll}
        variant="outline"
        size="sm"
        className="ml-2 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400"
      >
        Clear All
      </Button>
    </div>
  );
}

// Individual Filter Chip Component
interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <div className="inline-flex items-center bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-sm">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="ml-2 hover:bg-primary/20 rounded-full p-0.5 transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  );
}