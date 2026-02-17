'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notifications from '../components/Notifications';
import Image from 'next/image';
export default function SportsPage() {
  const [currentPage, setCurrentPage] = useState(1);

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
                  <span className="text-white text-xl font-semibold font-['Noto_Sans'] capitalize leading-7">Recently </span>
                  <span className="text-neutral-800 text-xl font-semibold font-['Noto_Sans'] capitalize leading-7">Posted</span>
                </div>
              </div>

              {/* Sports Posts */}
              <div className="space-y-12">
                {/* Post 1 - Left aligned */}
                <div className="w-[856px] h-96 relative">
                  <div className="w-48 h-64 left-0 top-0 absolute bg-slate-200 rounded-lg" />
                  <div className="w-96 h-80 left-[24px] top-[24px] absolute bg-zinc-300 rounded-lg" />
                  <div className="w-96 left-[425px] top-[105px] absolute justify-start text-neutral-800 text-2xl font-semibold font-['Noto_Sans'] capitalize leading-9">
                    BIUST Inter-University Sports Tournament 2024
                  </div>
                  <div className="size- px-2 py-1 left-[425px] top-[77px] absolute bg-slate-200 rounded-[3px] inline-flex justify-center items-center gap-2.5">
                    <div className="text-center justify-start text-stone-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">Sports</div>
                  </div>
                  <div className="left-[689px] top-[162px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">5 min. to read</div>
                  <div className="size-3 left-[671px] top-[162px] absolute bg-neutral-600" />
                  <div className="w-[2.82px] h-1.5 left-[676.40px] top-[165px] absolute bg-neutral-600" />
                  <div className="left-[544.90px] top-[162px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">15 March 2024</div>
                  <div className="w-2.5 h-3 left-[528px] top-[162px] absolute bg-neutral-600" />
                  <div className="left-[451px] top-[162px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">Sports Department</div>
                  <Image className="size-4 left-[425px] top-[159px] absolute rounded-full" src="/logo.jpg" alt="Author" width={18} height={18} />
                  <div className="w-3 h-0 left-[517px] top-[162px] absolute origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
                  <div className="w-3 h-0 left-[661px] top-[162px] absolute origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
                  <div className="w-96 left-[425px] top-[201px] absolute justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-snug">
                    Join us for the annual BIUST Inter-University Sports Tournament featuring basketball, football, and athletics competitions. 
                    Teams from across the region will compete for glory and prizes.
                  </div>
                </div>

                {/* Post 2 - Right aligned */}
                <div className="w-[856px] h-96 relative">
                  <div className="w-48 h-64 left-[461px] top-0 absolute bg-slate-200 rounded-lg" />
                  <div className="w-96 h-80 left-[485px] top-[24px] absolute bg-zinc-300 rounded-lg" />
                  <div className="w-96 left-0 top-[86px] absolute justify-start text-neutral-800 text-2xl font-semibold font-['Noto_Sans'] capitalize leading-9">
                    New Sports Facilities Opening Ceremony
                  </div>
                  <div className="size- px-2 py-1 left-0 top-[58px] absolute bg-slate-200 rounded-[3px] inline-flex justify-center items-center gap-2.5">
                    <div className="text-center justify-start text-stone-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">Events</div>
                  </div>
                  <div className="left-[264px] top-[181px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">3 min. to read</div>
                  <div className="size-3 left-[246px] top-[181px] absolute bg-neutral-600" />
                  <div className="w-[2.82px] h-1.5 left-[251.40px] top-[184px] absolute bg-neutral-600" />
                  <div className="left-[119.90px] top-[181px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">10 March 2024</div>
                  <div className="w-2.5 h-3 left-[103px] top-[181px] absolute bg-neutral-600" />
                  <div className="left-[26px] top-[181px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">Facilities Manager</div>
                  <Image className="size-4 left-0 top-[178px] absolute rounded-full" src="/logo.jpg" alt="Author" width={18} height={18} />
                  <div className="w-3 h-0 left-[92px] top-[181px] absolute origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
                  <div className="w-3 h-0 left-[236px] top-[181px] absolute origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
                  <div className="w-96 left-0 top-[220px] absolute justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-snug">
                    The university is proud to announce the opening of our new state-of-the-art sports complex, 
                    featuring an Olympic-sized swimming pool, indoor courts, and a modern fitness center.
                  </div>
                </div>

                {/* Post 3 - Left aligned */}
                <div className="w-[856px] h-96 relative">
                  <div className="w-48 h-64 left-0 top-0 absolute bg-slate-200 rounded-lg" />
                  <div className="w-96 h-80 left-[24px] top-[24px] absolute bg-zinc-300 rounded-lg" />
                  <div className="w-96 left-[425px] top-[105px] absolute justify-start text-neutral-800 text-2xl font-semibold font-['Noto_Sans'] capitalize leading-9">
                    BIUST Basketball Team Wins National Championship
                  </div>
                  <div className="size- px-2 py-1 left-[425px] top-[77px] absolute bg-slate-200 rounded-[3px] inline-flex justify-center items-center gap-2.5">
                    <div className="text-center justify-start text-stone-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">Achievement</div>
                  </div>
                  <div className="left-[689px] top-[162px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">4 min. to read</div>
                  <div className="size-3 left-[671px] top-[162px] absolute bg-neutral-600" />
                  <div className="w-[2.82px] h-1.5 left-[676.40px] top-[165px] absolute bg-neutral-600" />
                  <div className="left-[544.90px] top-[162px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">1 March 2024</div>
                  <div className="w-2.5 h-3 left-[528px] top-[162px] absolute bg-neutral-600" />
                  <div className="left-[451px] top-[162px] absolute justify-start text-neutral-500 text-xs font-normal font-['Noto_Sans'] capitalize leading-3">Sports Reporter</div>
                  <Image className="size-4 left-[425px] top-[159px] absolute rounded-full" src="/logo.jpg" alt="Author" width={18} height={18} />
                  <div className="w-3 h-0 left-[517px] top-[162px] absolute origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
                  <div className="w-3 h-0 left-[661px] top-[162px] absolute origin-top-left rotate-90 outline outline-[0.50px] outline-offset-[-0.25px] outline-neutral-400"></div>
                  <div className="w-96 left-[425px] top-[201px] absolute justify-start text-neutral-600 text-base font-normal font-['Noto_Sans'] leading-snug">
                    Our university's basketball team has made history by winning the national championship for the first time. 
                    Read about their incredible journey and the key players who made it possible.
                  </div>
                </div>
              </div>
            </div>

            {/* Featured This Month Section */}
            <div className="mb-12">
              <div className="w-40 h-8 relative mb-8">
                <div className="w-24 h-8 left-0 top-0 absolute bg-teal-500" />
                <div className="left-[1px] top-0 absolute justify-start">
                  <span className="text-white text-xl font-semibold font-['Noto_Sans'] capitalize leading-7">Featured </span>
                  <span className="text-neutral-800 text-xl font-semibold font-['Noto_Sans'] capitalize leading-7">This Month</span>
                </div>
              </div>

              {/* Featured Post */}
              <div className="relative">
                <div className="w-48 h-64 bg-slate-200 rounded-lg mb-4" />
                <div className="w-96 h-80 bg-zinc-300 rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold text-neutral-800 mb-2">
                  BIUST Basketball Team Wins National Championship
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-slate-200 rounded text-xs text-stone-500">Achievement</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Image className="w-4 h-4 rounded-full" src="logo.png" alt="Author" width={18} height={18} />
                    <span>Sports Reporter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>1 March 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>4 min read</span>
                  </div>
                </div>
                <p className="text-neutral-600">
                  Our university's basketball team has made history by winning the national championship for the first time. 
                  Read about their incredible journey and the key players who made it possible.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Notifications />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium">Swimming Competition</h4>
                  <p className="text-sm text-gray-600">March 20, 2024</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium">Athletics Meet</h4>
                  <p className="text-sm text-gray-600">March 25, 2024</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-medium">Basketball Finals</h4>
                  <p className="text-sm text-gray-600">April 1, 2024</p>
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