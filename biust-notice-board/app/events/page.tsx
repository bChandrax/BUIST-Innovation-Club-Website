'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notifications from '../components/Notifications';
import Image from 'next/image';
export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Recently Posted Section */}
            <div className="mb-12">
              <div className="w-40 h-8 relative mb-8">
                <div className="w-24 h-8 left-0 top-0 absolute bg-teal-500" />
                <div className="left-[1px] top-0 absolute justify-start">
                  <span className="text-white text-xl font-semibold font-['Noto_Sans'] capitalize leading-7">Upcoming </span>
                  <span className="text-neutral-800 text-xl font-semibold font-['Noto_Sans'] capitalize leading-7">Events</span>
                </div>
              </div>

              {/* Events Posts */}
              <div className="space-y-8">
                {/* Event 1 */}
                <div className="w-full h-64 relative bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="w-48 h-48 right-0 top-0 absolute bg-slate-200 rounded-lg" />
                  <div className="w-48 h-48 right-4 top-4 absolute bg-zinc-300 rounded-lg" />
                  <div className="w-[calc(100%-280px)] left-6 top-6 absolute">
                    <h2 className="text-xl font-semibold text-neutral-800 mb-2">
                      Tech Conference 2024: Future of Innovation
                    </h2>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-slate-200 rounded text-xs text-stone-500">Conference</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-2">
                      <div className="flex items-center gap-2">
                        <Image className="w-4 h-4 rounded-full" src="/logo.jpg" alt="Author" width={18} height={18} />
                        <span>Events Team</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>March 20, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>2 days event</span>
                      </div>
                    </div>
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      Join us for the biggest tech conference of the year featuring keynote speakers, workshops, and networking opportunities. 
                      Explore the latest trends in technology and innovation.
                    </p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="w-full h-64 relative bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="w-48 h-48 right-0 top-0 absolute bg-slate-200 rounded-lg" />
                  <div className="w-48 h-48 right-4 top-4 absolute bg-zinc-300 rounded-lg" />
                  <div className="w-[calc(100%-280px)] left-6 top-6 absolute">
                    <h2 className="text-xl font-semibold text-neutral-800 mb-2">
                      Workshop: Web Development Fundamentals
                    </h2>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-slate-200 rounded text-xs text-stone-500">Workshop</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-2">
                      <div className="flex items-center gap-2">
                        <Image className="w-4 h-4 rounded-full" src="/logo.jpg" alt="Author" width={18} height={18} />
                        <span>IT Department</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>March 25, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>4 hours</span>
                      </div>
                    </div>
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      Learn the fundamentals of modern web development in this hands-on workshop. 
                      Perfect for beginners looking to start their journey in web development.
                    </p>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="w-full h-64 relative bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="w-48 h-48 right-0 top-0 absolute bg-slate-200 rounded-lg" />
                  <div className="w-48 h-48 right-4 top-4 absolute bg-zinc-300 rounded-lg" />
                  <div className="w-[calc(100%-280px)] left-6 top-6 absolute">
                    <h2 className="text-xl font-semibold text-neutral-800 mb-2">
                      Career Fair: Meet Industry Leaders
                    </h2>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-slate-200 rounded text-xs text-stone-500">Career</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-2">
                      <div className="flex items-center gap-2">
                        <Image className="w-4 h-4 rounded-full" src="/logo.jpg" alt="Author" width={18} height={18} />
                        <span>Career Services</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>April 5, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>1 day event</span>
                      </div>
                    </div>
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      Connect with leading companies and explore exciting career opportunities. 
                      Bring your resume and make lasting professional connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Notifications />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium">Register for Events</h4>
                  <p className="text-sm text-gray-600">Sign up for upcoming events</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium">Event Calendar</h4>
                  <p className="text-sm text-gray-600">View all scheduled events</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium">Past Events</h4>
                  <p className="text-sm text-gray-600">Access event recordings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 