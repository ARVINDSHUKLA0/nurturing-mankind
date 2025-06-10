import React from 'react';
import '../componentsStyle/Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section className="text-white  footer-section-one pt-5">
        <div className="container">
          <div className="row text-start">
            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="text-uppercase fw-bold fs-14">Our Mission</h6>
              <ul className="list-unstyled">
                <li><Link href="#" className="text-white text-decoration-none fs-12 ">Save Leguans</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Educational Conference</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Florida Water Festival</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Back To The Wild</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="text-uppercase fw-bold fs-14">About Us</h6>
              <ul className="list-unstyled">
                <li><Link href="#" className="text-white text-decoration-none fs-12">Events</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Donations</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">News</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Contact</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">About Us</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="text-uppercase fw-bold fs-14">Partners</h6>
              <ul className="list-unstyled">
                <li><Link href="#" className="text-white text-decoration-none fs-12">Florida Water Association</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Rainforest Trust</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Saving the Rainforest</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Koadas Wildlife Sanctuary</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="text-uppercase fw-bold fs-10">Get in Touch</h6>
              <p className="mb-1 fw-bold fs-10">NaturePress Fund</p>
              <p className="mb-1 fs-10">2976 Washington St</p>
              <p className="mb-1 fs-10">San Francisco, CA 94115</p>
              <p className="mb-0 fs-10">Call us: +615 4640 3304</p>
            </div>
          </div>
        </div>
      </section>

      <section className='footer-section-two py-5'>
        <div className="container">
          <div className='d-flex justify-content-center align-items-center'>
            <div>
              <p className='fs-10 text-white text-center'>Sign up for weekly Charity News, Trainings & Webinars</p>
               <div className='my-4 text-center'>
                   <input className='custom-footer-input fs-14' type="text" placeholder='your email address' />
                   <button className='px-3 py-2 border-0 text-white cutom-all-bg text-uppercase fs-14'>singup</button>
               </div>
               <div className='d-flex gap-3 mt-5 mb-3'>
                    <button className='d-flex justify-content-center align-items-center bg-transparent border-0'>
                        <i className="fa-brands fa-x-twitter fs-12 text-white"></i>
                        <p className='text-uppercase fs-10 text-white m-0 ps-2'>twitter</p>
                    </button>
                    
                    <button className='d-flex justify-content-center align-items-center bg-transparent border-0'>
                        <i className="fa-brands fa-threads fs-12 text-white"></i>
                        <p className='text-uppercase fs-10 text-white m-0 ps-2'>threads</p>
                    </button>
                    
                    <button className='d-flex justify-content-center align-items-center bg-transparent border-0'>
                        <i className="fa-brands fa-youtube text-white fs-12"></i>
                        <p className='text-uppercase fs-10 text-white m-0 ps-2'>youtube</p>
                    </button>
                    
                    <button className='d-flex justify-content-center align-items-center bg-transparent border-0'>
                         <i className="fa-solid fa-magnifying-glass text-white fs-12"></i>
                        <p className='text-uppercase fs-10 text-white m-0 ps-2'>search</p>
                    </button>
                    
               </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
