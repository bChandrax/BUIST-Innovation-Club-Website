import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-16 bg-emerald-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-neutral-800">BIUST</div>
        </div>
        
        <div className="flex items-center gap-8">
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-neutral-800 hover:text-teal-500">News</a>
            <a href="/blog" className="text-neutral-800 hover:text-teal-500">Blogs & Stories</a>
            <a href="/about" className="text-neutral-800 hover:text-teal-500">Clubs & Sports</a>
            <a href="/events" className="text-neutral-800 hover:text-teal-500">Events</a>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-800 font-medium">en</span>
            <div className="w-1.5 h-[3px] outline outline-[1.20px] outline-offset-[-0.60px] outline-stone-900"></div>
          </div>

          {/* Search Icon */}
          <button className="w-12 h-5 bg-zinc-100 rounded-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 