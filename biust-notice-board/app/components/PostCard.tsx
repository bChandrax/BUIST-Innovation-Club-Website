import React from 'react';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  isFeatured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  imageUrl,
  isFeatured = false,
}) => {
  return (
    <div className="flex gap-8">
      <div className="w-64 h-44 bg-zinc-300 rounded-[5px] relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className={`px-2 py-1 rounded-[3px] inline-flex justify-center items-center gap-2.5 ${
            isFeatured ? 'bg-teal-500' : 'bg-slate-100'
          }`}>
            <span className={`text-xs font-normal capitalize leading-3 ${
              isFeatured ? 'text-white' : 'text-stone-500'
            }`}>{category}</span>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-neutral-800 capitalize leading-9 mb-4">
          {title}
        </h3>

        <p className="text-base text-neutral-600 leading-snug mb-4">
          {excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt={author}
              width={16}
              height={16}
              className="rounded-full"
            />
            <span className="capitalize">{author}</span>
          </div>
          
          <div className="w-3 h-0 origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
          
          <span className="capitalize">{date}</span>
          
          <div className="w-3 h-0 origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
          
          <span className="capitalize">{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard; 