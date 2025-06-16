'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../componentsStyle/banner.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const BannerArr = [
    {
      id: 1,
      BannerImg: '/assets/img/banner-1.jpeg',
      hediingBanner: (
        <>
          Empowering Lives.
        </>
      ),
      Subheadline : ' Building a better world through education, healthcare, sustainable livelihoods, women empowerment, animal welfare, and environmental conservation.'
    },
    {
      id: 2,
      BannerImg: '/assets/img/banner-2.jpeg',
      hediingBanner: (
        <>
           PawTech Shield 
        </>
      ),
      Subheadline : "Free Vaccines, Safer Streets"
    },
    {
      id: 3,
      BannerImg: '/assets/img/banner-3.jpeg',
      hediingBanner: (
        <>
          From Skills to Strength
        </>
      ),
      Subheadline : "Uplifting Women, One Step at a Time"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setActiveSlide(newIndex);
    }
  };

  return (
    <section className='banner-section-main'>
      <Slider {...settings}>
        {BannerArr.map((item, index) => (
          <div className='position-relative' key={item.id}>
            <div className='banner-respsive'>
              <Image
                src={item.BannerImg}
                alt={`Banner ${item.id}`}
                width={1920}
                height={800}
                className='img-fluid w-100'
              />
            </div>
            <div className='banner-postion'>
              <div>
                <h2 className={`text-white text-uppercase custom-text-font-size ${activeSlide === index ? 'slide-in-heading' : ''}`}>
                  {item.hediingBanner}
                </h2>
                <p className='text-center text-white fs-16 fw-bold px-lg-5'>{item.Subheadline}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
