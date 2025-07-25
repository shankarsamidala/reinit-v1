import { Job } from '@/core/types/job';

export const allJobs: Job[] = [
  // Featured Jobs (already created)
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
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
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
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>`,
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
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>`,
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
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"/></svg>`,
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
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>`,
    isFeatured: true
  },

  // Additional Jobs for Grid
  {
    id: 6,
    title: "Backend Engineer",
    company: "Airbnb",
    description: "Build robust backend systems that power Airbnb's global marketplace. Work with microservices, APIs, and distributed systems.",
    location: "Austin, TX",
    type: "full-time",
    salaryMin: 140,
    salaryMax: 190,
    experience: 3,
    posted: "1 week ago",
    iconBg: "bg-pink-600",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "GitHub",
    description: "Manage and optimize GitHub's infrastructure. Work with Kubernetes, Docker, and cloud platforms to ensure reliable service delivery.",
    location: "Remote",
    type: "full-time",
    salaryMin: 130,
    salaryMax: 180,
    experience: 4,
    posted: "3 days ago",
    iconBg: "bg-gray-800",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },
  {
    id: 8,
    title: "UX Researcher",
    company: "Adobe",
    description: "Conduct user research to inform product decisions across Adobe's Creative Cloud suite. Design and execute user studies.",
    location: "Seattle, WA",
    type: "full-time",
    salaryMin: 120,
    salaryMax: 160,
    experience: 2,
    posted: "5 days ago",
    iconBg: "bg-red-500",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },
  {
    id: 9,
    title: "Machine Learning Engineer",
    company: "Tesla",
    description: "Develop ML models for autonomous driving systems. Work on computer vision, neural networks, and real-time inference systems.",
    location: "Palo Alto, CA",
    type: "full-time",
    salaryMin: 180,
    salaryMax: 250,
    experience: 4,
    posted: "2 days ago",
    iconBg: "bg-black",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>`,
    isFeatured: false
  },
  {
    id: 10,
    title: "Mobile Developer",
    company: "Instagram",
    description: "Build and maintain Instagram's mobile applications. Work with React Native, iOS, and Android to deliver features to millions of users.",
    location: "Menlo Park, CA",
    type: "full-time",
    salaryMin: 160,
    salaryMax: 220,
    experience: 3,
    posted: "1 week ago",
    iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },
  {
    id: 11,
    title: "Data Analyst",
    company: "Uber",
    description: "Analyze data to optimize Uber's operations and improve user experience. Work with SQL, Python, and data visualization tools.",
    location: "Chicago, IL",
    type: "full-time",
    salaryMin: 90,
    salaryMax: 130,
    experience: 2,
    posted: "4 days ago",
    iconBg: "bg-black",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>`,
    isFeatured: false
  },
  {
    id: 12,
    title: "Security Engineer",
    company: "Cloudflare",
    description: "Protect Cloudflare's infrastructure and customer data. Work on threat detection, incident response, and security automation.",
    location: "Remote",
    type: "full-time",
    salaryMin: 150,
    salaryMax: 200,
    experience: 5,
    posted: "6 days ago",
    iconBg: "bg-orange-500",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },

  // Part-time and Contract Jobs
  {
    id: 13,
    title: "Freelance Web Designer",
    company: "99designs",
    description: "Create stunning web designs for various clients. Flexible hours, work on exciting projects from different industries.",
    location: "Remote",
    type: "part-time",
    salaryMin: 50,
    salaryMax: 80,
    experience: 1,
    posted: "2 days ago",
    iconBg: "bg-green-500",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },
  {
    id: 14,
    title: "React Developer",
    company: "Freelancer.com",
    description: "Contract React development work. Build modern web applications using the latest React ecosystem tools and best practices.",
    location: "Remote",
    type: "contract",
    salaryMin: 70,
    salaryMax: 120,
    experience: 2,
    posted: "1 day ago",
    iconBg: "bg-blue-500",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },
  {
    id: 15,
    title: "Marketing Intern",
    company: "HubSpot",
    description: "Join our marketing team as an intern. Learn digital marketing, content creation, and analytics in a supportive environment.",
    location: "Boston, MA",
    type: "internship",
    salaryMin: 20,
    salaryMax: 25,
    experience: 0,
    posted: "3 days ago",
    iconBg: "bg-orange-600",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>`,
    isFeatured: false
  },

  // More diverse jobs to reach 20+ total
  {
    id: 16,
    title: "QA Engineer",
    company: "Atlassian",
    description: "Ensure product quality through comprehensive testing strategies. Work with automation tools and collaborate with development teams.",
    location: "Sydney, Australia",
    type: "full-time",
    salaryMin: 80,
    salaryMax: 120,
    experience: 3,
    posted: "1 week ago",
    iconBg: "bg-blue-700",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>`,
    isFeatured: false
  },
  {
    id: 17,
    title: "Technical Writer",
    company: "GitLab",
    description: "Create clear, comprehensive documentation for GitLab's platform. Work closely with engineering teams to document features and APIs.",
    location: "Remote",
    type: "full-time",
    salaryMin: 70,
    salaryMax: 100,
    experience: 2,
    posted: "5 days ago",
    iconBg: "bg-purple-700",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>`,
    isFeatured: false
  },
  {
    id: 18,
    title: "Product Marketing Manager",
    company: "Zoom",
    description: "Drive go-to-market strategies for Zoom's products. Work with cross-functional teams to launch features and grow user adoption.",
    location: "San Jose, CA",
    type: "full-time",
    salaryMin: 120,
    salaryMax: 160,
    experience: 4,
    posted: "2 days ago",
    iconBg: "bg-blue-600",
    icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>`,
    isFeatured: false
  }
];

// Export featured jobs separately for the carousel
export const featuredJobs = allJobs.filter(job => job.isFeatured);