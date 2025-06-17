'use client'
import '../Gallery/Gallery.css'
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar';
import AllPortfolioImage from '@/Data/AllIData.js';
import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; 
  

const Page = () => {
  const  images = AllPortfolioImage
 

  const [aarproduct, setArrProduct] = useState([]);
  const [totalpage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState(21);
  const [pages, setPages] = useState(1);
  const [skip, setSkip] = useState(0);
 
  const [showGallery, setShowGallery] = useState(false);  
  const [currentIndex, setCurrentIndex] = useState(0);

  const datafetch = () => {
    const totalItems = images.length;
    const pageclculter = Math.ceil(totalItems / limit);
    setTotalPage(pageclculter);

    const products = images.slice(skip, skip + limit);
    setArrProduct(products);
  };

  const funclick = (valuenum) => {
    setPages(valuenum);
    const skipproduct = limit * (Number(valuenum) - 1);
    setSkip(skipproduct);
  };

  const openGallery = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };
  const closeGallery = () => {
    setShowGallery(false);
  };

  useEffect(() => {
    datafetch();
  }, [skip]);

  return (
    <> 
      <Navbar hasBanner={false}/>
      <section className='py-lg-5 py-3'>
      <div className='container'> 
          <div className='row m-0'>
            {aarproduct.map((currentValue, i) => (
              <div key={currentValue.id} className='col-lg-4 col-md-4 col-sm-6 col-12 text-center p-0 product-wrap '>
                <img
                  src={currentValue.thumbnail}
                  alt=""
                  style={{ cursor: 'pointer' }}
                  className='img-fluid product-img'
                  onClick={() => openGallery(currentValue.id - 1)}
                />
              </div>
            ))}
          </div> 
        </div>  
  
      <div className="d-flex flex-wrap gap-2 justify-content-center my-4">  
        <button className='pagination-btn border' onClick={() => funclick(1)}>
        <i className="fa-solid fa-angles-left"></i>
        </button>
        <button className='pagination-btn border' disabled={pages <= 1} onClick={() => funclick(pages-1)}>
        <i className="fa-solid fa-chevron-left"></i>
        </button>
        <span className='border pageNumberBox'>{pages}</span>
        <span>of {totalpage}</span>
        <button className='pagination-btn border' disabled={pages >= totalpage} onClick={() => funclick(pages+1)}>
        <i className="fa-solid fa-chevron-right"></i>
        </button>
        <button className='pagination-btn border' onClick={() => funclick(totalpage)}>
        <i className="fa-solid fa-angles-right"></i>
        </button> 
      </div>

      {showGallery && (
        <div className="gallery-model">
          <ImageGallery
            items={images}
            startIndex={currentIndex}
            showThumbnails={true}

            lazyLoad={true} 



          />
          <span className="gallery-close" onClick={closeGallery}><i className="fa-solid fa-xmark"></i></span>
        </div>
      )}
      </section>
      <Footer/>
    </>
  );
};

export default Page;
