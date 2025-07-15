export interface JobCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

export const jobCategories: JobCategory[] = [
  {
    id: 'technology',
    name: 'Technology',
    icon: '💻',
    count: 156,
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  {
    id: 'design',
    name: 'Design',
    icon: '🎨',
    count: 89,
    color: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: '📈',
    count: 67,
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: '💰',
    count: 45,
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: '🤝',
    count: 78,
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: '👥',
    count: 34,
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: '⚙️',
    count: 56,
    color: 'bg-gray-100 text-gray-800 border-gray-200'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    count: 42,
    color: 'bg-teal-100 text-teal-800 border-teal-200'
  }
];