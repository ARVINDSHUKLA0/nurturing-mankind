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
                <li><Link href="/Vision" className="text-white text-decoration-none fs-12 ">Vision</Link></li>
                <li><Link href="/Mission" className="text-white text-decoration-none fs-12">Mission</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12"> Our Values</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="text-uppercase fw-bold fs-14">About Us</h6>
              <ul className="list-unstyled">
                <li><Link href="/Introduction" className="text-white text-decoration-none fs-12">Introduction</Link></li>
                <li><Link href="/Governing" className="text-white text-decoration-none fs-12">Governing Body</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Our Works</Link></li>
                <li><Link href="/AnimalWelfa" className="text-white text-decoration-none fs-12">Animal Welfare</Link></li>
                <li><Link href="/Livelihood" className="text-white text-decoration-none fs-12">Livelihood</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Work with Us</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <h6 className="text-uppercase fw-bold fs-14">Campaigns</h6>
              <ul className="list-unstyled">
                <li><Link href="/DogRabies" className="text-white text-decoration-none fs-12">Eradicating Dog Mediated Rabies by 2030</Link></li>
                <li><Link href="/DoghitRun" className="text-white text-decoration-none fs-12">Reducing Stray Dog Hit & Run Road Fatalities</Link></li>
                <li><Link href="/DogVaccinating" className="text-white text-decoration-none fs-12">Vaccinating Stray Dogs against life threatnening diseases</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">support</Link></li>
                <li><Link href="/Donate" className="text-white text-decoration-none fs-12">Donate</Link></li>
                <li><Link href="/Sponsor" className="text-white text-decoration-none fs-12">Sponsor</Link></li>

              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 ps-sm-5">
              <h6 className="text-uppercase fw-bold fs-14">Gallery</h6>
              <ul className="list-unstyled">
                <li><Link href="#" className="text-white text-decoration-none fs-12">News & Events</Link></li>
                <li><Link href="#" className="text-white text-decoration-none fs-12">Impact Stories</Link></li>
                <li><Link href="/Contact" className="text-white text-decoration-none fs-12">Contact Us</Link></li>
                <li><Link href="/Testimonials" className="text-white text-decoration-none fs-12">Testimonials </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='footer-section-two py-3'>
        <div className="container">
          <div className='d-flex justify-content-center align-items-center'>
            <div>
              <div className='d-flex gap-3 mt-2 mb-3'>
                <Link className='text-decoration-none' href="https://instagram.com/nurturingmankind">
                <button className='d-flex justify-content-center align-items-center bg-transparent border-0'>
                  <i className="fa-brands fa-instagram text-white"></i>
                  <p className='text-uppercase fs-10 text-white m-0 ps-2'>instagram</p>
                </button>
                </Link>
                <Link className='text-decoration-none' href="https://www.facebook.com/nurturingmankind">
                  <button className='d-flex justify-content-center align-items-center bg-transparent border-0'>
                    <i className="fa-brands fa-facebook text-white"></i>
                    <p className='text-uppercase fs-10 text-white m-0 ps-2'>facebook</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}
