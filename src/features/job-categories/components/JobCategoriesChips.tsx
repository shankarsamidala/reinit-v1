'use client';

import { useState } from 'react';
import { jobCategories, JobCategory } from '@/core/data/jobCategories';

interface JobCategoriesChipsProps {
  selectedCategory?: string;
  onCategorySelect?: (categoryId: string | null) => void;
}

export default function JobCategoriesChips({ 
  selectedCategory, 
  onCategorySelect 
}: JobCategoriesChipsProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(selectedCategory || null);

  const handleCategoryClick = (categoryId: string) => {
    const newCategory = activeCategory === categoryId ? null : categoryId;
    setActiveCategory(newCategory);
    onCategorySelect?.(newCategory);
  };

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Browse by Category</h3>
          {activeCategory && (
            <button
              onClick={() => handleCategoryClick(activeCategory)}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              Clear selection
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {jobCategories.map((category) => (
            <CategoryChip
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CategoryChipProps {
  category: JobCategory;
  isActive: boolean;
  onClick: () => void;
}

function CategoryChip({ category, isActive, onClick }: CategoryChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center px-4 py-2 rounded-full border transition-all duration-200
        hover:shadow-custom-sm hover:scale-105
        ${isActive 
          ? 'bg-primary text-white border-primary shadow-custom' 
          : `${category.color} hover:shadow-md`
        }
      `}
    >
      <span className="text-lg mr-2">{category.icon}</span>
      <span className="font-medium text-sm">{category.name}</span>
      <span className={`
        ml-2 px-2 py-0.5 rounded-full text-xs font-semibold
        ${isActive 
          ? 'bg-white/20 text-white' 
          : 'bg-white/70 text-gray-700'
        }
      `}>
        {category.count}
      </span>
    </button>
  );
}