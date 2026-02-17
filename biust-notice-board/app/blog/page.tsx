'use client';

import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import { LoginDialog } from '../components/LoginDialog';

const carouselSlides = [
  {
    image: '/logo.jpg',
    title: 'Featured Story 1',
    description: 'An amazing story about technology and innovation',
  },
  {
    image: '/logo.jpg',
    title: 'Featured Story 2',
    description: 'Exploring the future of web development',
  },
  {
    image: '/logo.jpg',
    title: 'Featured Story 3',
    description: 'The impact of AI on modern society',
  },
];

const blogPosts = [
  {
    image: '/logo.jpg',
    category: 'travel',
    title: 'Set video playback speed with javascript',
    description: 'Did you come here for something in particular or just general Riker-bashing',
    author: {
      name: 'Jesica koli',
      avatar: '/favicon',
    },
    date: '02 december 2022',
    readTime: '3 min. to read',
  },
  // Add more blog posts here...
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Here you would typically fetch the new page data
    console.log('Page changed:', page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold font-['Noto_Sans'] capitalize leading-9">
          <span className="text-white">Read</span>
          <span className="text-neutral-800"> author blogs</span>
        </h1>
        <LoginDialog />
      </div>

      <Carousel slides={carouselSlides} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      <div className="mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
} 