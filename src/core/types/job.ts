export interface Job {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  salaryMin: number;
  salaryMax: number;
  experience: number;
  posted: string;
  iconBg: string;
  icon: string;
  isFeatured?: boolean;
}