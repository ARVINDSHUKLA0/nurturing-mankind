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
      BannerImg: '/assets/img/banner-1.jpg',
      hediingBanner: (
        <>
          project <br /> rainforests, <br /> species & planet
        </>
      ),
    },
    {
      id: 2,
      BannerImg: '/assets/img/banner-2.jpg',
      hediingBanner: (
        <>
          a race against <br /> time 
        </>
      ),
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
              </div>
              <div className={`d-flex justify-content-center align-items-center gap-3 pt-4 ${activeSlide === index ? 'slide-in-buttons' : ''}`}>
                <div className='text-white'>
                  <button className='border-0 cutom-all-bg text-white fs-10 py-2 px-3 text-uppercase'>get involved</button>
                </div>
                <span className='text-white fs-10'>or</span>
                <div className='text-white'>
                  <button className='send-btn-custom py-2 px-3 fs-10 text-uppercase text-white'>engage events</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
