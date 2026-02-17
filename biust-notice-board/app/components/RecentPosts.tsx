import React from 'react';
import PostCard from './PostCard';

interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: Date;
  category?: string;
  views?: number;
}

interface RecentPostsProps {
  posts: Post[];
  loading: boolean;
}

const RecentPosts = ({ posts, loading }: RecentPostsProps) => {
  // Fallback data for demo purposes
  const fallbackPosts = [
    {
      title: "Design is the Mix of emotions",
      excerpt: "Did you come here for something in particular or just general Riker-bashing? And blowing into",
      category: "Travel",
      author: "Jenny kiaa",
      date: "02 december 2022",
      readTime: "3 min. to read",
      imageUrl: "/logo.jpg"
    },
    {
      title: "Design is the Mix of emotions try to feel it",
      excerpt: "Did you come here for something in particular or just general Riker-bashing? And blowing into",
      category: "Travel",
      author: "Jesica koli",
      date: "02 december 2022",
      readTime: "3 min. to read",
      imageUrl: "/logo.jpg"
    },
    {
      title: "Design is the Mix of emotions",
      excerpt: "Did you come here for something in particular or just general Riker-bashing? And blowing into",
      category: "Travel",
      author: "Jenny kiaa",
      date: "02 december 2022",
      readTime: "3 min. to read",
      imageUrl: "/logo.jpg"
    }
  ];

  // Transform Firebase posts to match PostCard props
  const transformedPosts = posts.length > 0 ? posts.map(post => ({
    title: post.title,
    excerpt: post.content.substring(0, 100) + "...",
    category: post.category || "General",
    author: "Admin", // You can add author field to Firebase
    date: post.createdAt.toLocaleDateString(),
    readTime: "3 min. to read",
    imageUrl: post.imageUrl || "/logo.jpg"
  })) : fallbackPosts;

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-8">
          <div className="w-24 h-8 bg-teal-500 flex items-center justify-center">
            <span className="text-white text-xl font-semibold capitalize leading-7">Recently</span>
          </div>
          <span className="text-neutral-800 text-xl font-semibold capitalize leading-7">Posted</span>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p>Loading recent posts...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {transformedPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentPosts; 