'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // TODO: Implement search functionality
  };

  return (
    <header className="bg-white border-b border-black w-full">
      <div className="w-full px-4 sm:px-6 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold">
              Re:<span className="text-primary">Init</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
              Browse Jobs
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
              Companies
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search jobs, companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pr-16 border-gray-400 focus:border-black"
                />
                <Button
                  type="submit"
                  size="default"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4 bg-primary hover:bg-primary/90"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </Button>
              </div>
            </form>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="default"
              className="border-black hover:bg-gray-100 hover:shadow-custom-sm px-5 py-2 h-10 text-base font-semibold"
            >
              Sign In
            </Button>
            <Button 
              size="default"
              className="bg-black text-white hover:bg-yellow-400 hover:text-black hover:shadow-custom-sm transition-colors duration-200 px-5 py-2 h-10 text-base font-semibold"
            >
              Post Job
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="md:hidden">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search jobs, companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pr-16 border-gray-300  focus:border-black"
                />
                <Button
                  type="submit"
                  size="default"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4 bg-primary hover:bg-primary/90"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </Button>
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2">
                Browse Jobs
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                Companies
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2">
                About
              </a>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Button 
                variant="outline" 
                size="default"
                className="border-black hover:bg-gray-100 h-10 text-base font-semibold"
              >
                Sign In
              </Button>
              <Button 
                size="default"
                className="bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors duration-200 h-10 text-base font-semibold"
              >
                Post Job
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}