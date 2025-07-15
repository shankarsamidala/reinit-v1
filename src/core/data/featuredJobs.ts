import { Job } from '@/core/types/job';

export const featuredJobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Stripe",
    description: "Join Stripe's infrastructure team to build scalable payment systems. Work with cutting-edge technology and solve complex distributed systems challenges.",
    location: "San Francisco, CA",
    type: "full-time",
    salaryMin: 180,
    salaryMax: 250,
    experience: 5,
    posted: "2 days ago",
    iconBg: "bg-blue-600",
    icon: `<svg class="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
    isFeatured: true
  },
  {
    id: 2,
    title: "Senior Product Designer",
    company: "Figma",
    description: "Lead design for Figma's core collaboration features. Shape the future of design tools used by millions of designers worldwide.",
    location: "New York, NY",
    type: "full-time",
    salaryMin: 160,
    salaryMax: 220,
    experience: 4,
    posted: "3 days ago",
    iconBg: "bg-purple-600",
    icon: `<svg class="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
    </svg>`,
    isFeatured: true
  },
  {
    id: 3,
    title: "Data Science Manager",
    company: "Spotify",
    description: "Lead a team of data scientists working on music recommendation algorithms. Drive insights that shape how users discover music.",
    location: "Remote",
    type: "full-time",
    salaryMin: 200,
    salaryMax: 280,
    experience: 6,
    posted: "1 day ago",
    iconBg: "bg-green-600",
    icon: `<svg class="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
    </svg>`,
    isFeatured: true
  },
  {
    id: 4,
    title: "Senior Product Manager",
    company: "Netflix",
    description: "Drive product strategy for Netflix's content discovery platform. Work with ML engineers to enhance personalization algorithms.",
    location: "Los Angeles, CA",
    type: "full-time",
    salaryMin: 170,
    salaryMax: 240,
    experience: 5,
    posted: "5 days ago",
    iconBg: "bg-red-600",
    icon: `<svg class="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"/>
    </svg>`,
    isFeatured: true
  },
  {
    id: 5,
    title: "Frontend Engineer",
    company: "Slack",
    description: "Build the next generation of Slack's web and desktop applications. Work with React, TypeScript, and modern web technologies.",
    location: "Remote",
    type: "full-time",
    salaryMin: 150,
    salaryMax: 210,
    experience: 3,
    posted: "4 days ago",
    iconBg: "bg-yellow-600",
    icon: `<svg class="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>`,
    isFeatured: true
  }
];