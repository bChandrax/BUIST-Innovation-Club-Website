'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
interface CarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full mb-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <h2 className="text-white text-3xl font-semibold mb-2">{slide.title}</h2>
              <p className="text-white/90">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel; 