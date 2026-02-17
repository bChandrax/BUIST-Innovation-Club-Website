import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { getPopularPosts } from '../../lib/firestore';

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const PopularPosts = () => {
  const [popularPosts, setPopularPosts] = useState<PostCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data
  const fallbackPosts = [
    {
      title: "Design is the Mix of emotions",
      excerpt: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp",
      category: "Travel",
      author: "Jenny kiaa",
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

  useEffect(() => {
    const fetchPopularPosts = async () => {
      setLoading(true);
      try {
        const posts = await getPopularPosts(5);
        const transformedPosts = posts.map((post: any) => ({
          title: post.title,
          excerpt: post.content?.substring(0, 100) + "..." || "No content available",
          category: post.category || "General",
          author: "Admin",
          date: post.createdAt.toLocaleDateString(),
          readTime: "3 min. to read",
          imageUrl: post.imageUrl || "/logo.jpg"
        }));
        setPopularPosts(transformedPosts.length > 0 ? transformedPosts : fallbackPosts);
      } catch (error) {
        console.error("Error fetching popular posts:", error);
        setPopularPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-8">
          <div className="w-20 h-8 bg-teal-500 flex items-center justify-center">
            <span className="text-white text-xl font-semibold capitalize leading-7">Popular</span>
          </div>
          <span className="text-neutral-800 text-xl font-semibold capitalize leading-7">Posted</span>
        </div>

        {loading ? (
          <div className="text-center py-4">
            <p>Loading popular posts...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {popularPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularPosts; 