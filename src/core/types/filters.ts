export interface JobFilters {
  jobTypes: string[];
  experienceRange: {
    min: number;
    max: number;
  };
  salaryRange: {
    min: number;
    max: number;
  };
  locationTypes: string[];
}

export const defaultFilters: JobFilters = {
  jobTypes: [],
  experienceRange: { min: 0, max: 24 },
  salaryRange: { min: 0, max: 40 },
  locationTypes: []
};