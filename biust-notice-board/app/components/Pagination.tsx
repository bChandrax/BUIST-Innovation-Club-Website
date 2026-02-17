'use client';

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-28 h-10 rounded-[5px] border border-stone-300 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <div className="w-2.5 h-0 origin-top-left -rotate-180 bg-stone-500 rounded-[5px] border border-stone-500"></div>
        <span className="text-stone-500 text-base font-normal leading-none">Prev.</span>
      </button>

      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`size-10 rounded-[5px] border ${
            currentPage === page
              ? 'border-teal-500 bg-teal-500 text-white'
              : 'border-stone-300 text-stone-500'
          } flex items-center justify-center`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-24 h-10 bg-teal-500 rounded-[5px] flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <span className="text-white text-base font-normal leading-none">Next</span>
        <div className="w-2.5 h-0 rounded-[5px] border border-white"></div>
      </button>
    </div>
  );
};

export default Pagination; 