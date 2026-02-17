'use client';

import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  description,
  author,
  date,
  readTime,
}) => {
  return (
    <div className="w-96 relative">
      <div className="w-96 h-64 bg-zinc-300 rounded-[5px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={384}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="px-2 py-1 mt-4 bg-slate-200 rounded-[3px] inline-flex justify-center items-center gap-2.5">
        <span className="text-stone-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">
          {category}
        </span>
      </div>

      <h3 className="mt-4 text-neutral-800 text-2xl font-semibold font-['Noto_Sans'] capitalize leading-9">
        {title}
      </h3>

      <div className="mt-4 flex items-center gap-2">
        <Image
          src={author.avatar}
          alt={author.name}
          width={16}
          height={16}
          className="rounded-full"
        />
        <span className="text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">
          {author.name}
        </span>
        <div className="w-3 h-0 origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400" />
        <span className="text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">
          {date}
        </span>
        <div className="w-3 h-0 origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400" />
        <span className="text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">
          {readTime}
        </span>
      </div>

      <p className="mt-4 text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-snug">
        {description}
      </p>
    </div>
  );
};

export default BlogCard; 