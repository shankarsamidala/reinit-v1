import { Job } from '@/core/types/job';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface JobGridCardProps {
  job: Job;
}

export default function JobGridCard({ job }: JobGridCardProps) {
  return (
    <Card className="border-black hover:shadow-custom transition-all duration-200 h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${job.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <div 
                className="w-6 h-6 text-white"
                dangerouslySetInnerHTML={{ __html: job.icon }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-base truncate">{job.title}</h3>
              <p className="text-sm text-gray-600 truncate">{job.company}</p>
            </div>
          </div>
          <span className="bg-green-100 text-custom-text text-xs font-semibold px-2 py-1 rounded whitespace-nowrap ml-2">
            ${job.salaryMin}k - ${job.salaryMax}k
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">
          {job.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              {job.location}
            </span>
            <span className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
            </span>
            <span className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {job.experience}+ years
            </span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-500">{job.posted}</span>
            <Button size="sm" className="bg-primary hover:bg-primary/90 hover:shadow-custom-sm">
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}