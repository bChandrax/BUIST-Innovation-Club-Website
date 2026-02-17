'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularPosts from './components/PopularPosts';
import RecentPosts from './components/RecentPosts';
import Newsletter from './components/Newsletter';
import Pagination from './components/Pagination';
import Notifications from './components/Notifications';
import Footer from './components/Footer';
import { getPostsWithPagination } from '../lib/firestore';

interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: Date;
  category?: string;
  views?: number;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { posts: fetchedPosts, totalPages: fetchedTotalPages } = 
          await getPostsWithPagination(currentPage, 6);
        setPosts(fetchedPosts as Post[]);
        setTotalPages(fetchedTotalPages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RecentPosts posts={posts} loading={loading} />
          </div>
          <div className="space-y-8">
            <Notifications />
            <PopularPosts />
          </div>
        </div>
      </div>

      <Newsletter />
      
      <div className="container mx-auto px-4 py-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      
      <Footer />
    </main>
  );
}
