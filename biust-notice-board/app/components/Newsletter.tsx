import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="w-[856px] h-52 bg-slate-100 rounded-[10px] mx-auto flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-neutral-800 capitalize leading-7 mb-8">
            Share your knowledge with our readers
          </h2>
          
          <button className="w-60 h-12 rounded-md border border-teal-500 flex items-center justify-center gap-2">
            <div className="size-3.5 bg-teal-500"></div>
            <span className="text-teal-500 text-base font-normal capitalize leading-none">
              Write on notebook
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 