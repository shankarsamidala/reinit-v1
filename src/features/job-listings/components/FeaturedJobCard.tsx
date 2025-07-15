import { Job } from '@/core/types/job';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FeaturedJobCardProps {
  job: Job;
}

export default function FeaturedJobCard({ job }: FeaturedJobCardProps) {
  return (
    <Card className="min-w-[280px] sm:min-w-[400px] lg:min-w-[500px] max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] snap-start border-black transition-all duration-200 flex flex-col sm:flex-row h-[360px] sm:h-[280px]">
      <div className="w-full sm:w-48 h-32 sm:h-full overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-t-none flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center p-4">
          <div className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-2 sm:mb-3 ${job.iconBg} rounded-lg flex items-center justify-center`}>
            <div 
              className="w-6 sm:w-8 h-6 sm:h-8 text-white"
              dangerouslySetInnerHTML={{ __html: job.icon }}
            />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-blue-900">{job.company}</p>
        </div>
      </div>
      
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-sm sm:text-base mb-2">{job.title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 flex-grow mb-3">{job.description}</p>
        
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 text-xs sm:text-sm">
          <span className="flex items-center text-gray-600">
            <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            {job.location}
          </span>
          <span className="flex items-center text-gray-600">
            <svg className="w-3 sm:w-4 h-3 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="bg-green-100 text-custom-text text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded">
            ${job.salaryMin}k - ${job.salaryMax}k
          </span>
          <span className="text-xs sm:text-sm text-gray-500">{job.posted}</span>
        </div>
      </CardContent>
    </Card>
  );
}