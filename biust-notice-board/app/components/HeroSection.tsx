import React from 'react';
import PostCard from './PostCard';
import Notification from './Notification';

const HeroSection = () => {
  const featuredPosts = [
    {
      title: "Set video playback speed with javascript",
      excerpt: "Did you come here for something in particular or just general Riker-bashing? And blowing into",
      category: "Travel",
      author: "Jenny kiaa",
      date: "02 december 2022",
      readTime: "3 min. to read",
      imageUrl: "/logo.jpg",
      isFeatured: true
    },
    {
      title: "Design is the Mix of emotions",
      excerpt: "Did you come here for something in particular or just general Riker-bashing? And blowing into",
      category: "Travel",
      author: "Jenny kiaa",
      date: "02 december 2022",
      readTime: "3 min. to read",
      imageUrl: "/logo.jpg",
      isFeatured: true
    }
  ];

  return (
    <section className="w-full bg-slate-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-8">
          <div className="w-24 h-8 bg-teal-500 flex items-center justify-center">
            <span className="text-white text-xl font-semibold capitalize leading-7">Featured</span>
          </div>
          <span className="text-neutral-800 text-xl font-semibold capitalize leading-7">This month</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-1 gap-8">
            {featuredPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <Notification />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 