import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar hasBanner={false}/>
      <section className='py-lg-5 py-3'>
          <div className="container">
              <div>
                  <h4 className='fw-bold fst-italic'>Contact us</h4>
                  <p className='fs-16 fst-italic m-0'>Nurturing Mankind </p>
                  <p className='fs-16 fst-italic m-0'>C-26, Sector 65, Noida, Uttar Pradesh, INDIA </p>
                  <p className='fs-16 fst-italic m-0'>Contact: +91- 9319471666 </p>
                  <p className='fs-16 fst-italic m-0'>Care@nurturingmankind.org </p>
                  <p className='fs-16 fst-italic m-0'>Pawtech Sheild Campaigns </p>
                  <p className='fs-16 fst-italic m-0'>Free Stray Dog Vaccination Drive </p>
                  <p className='fs-16 fst-italic m-0 '>+91-9599407666, 9599417666 </p>
              </div>
          </div>
      </section>
      <Footer/>
    </>
  )
}

export default page