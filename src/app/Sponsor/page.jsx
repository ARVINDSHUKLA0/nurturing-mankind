import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar hasBanner={false}/>
      <section className='py-lg-5 py-3'>
          <div className="container">
              <div className='d-flex gap-sm-4'> 
                  <div className='pe-5'>
                    <p  className='m-0 fs-14'>Sponsor a Stray Dog Vaccination against Rabies for a Year - <span className='fw-bold'>Rs 700</span> </p>
                  </div>
              </div>
              <div className='d-flex gap-4'> 
                  <div>
                    <p  className='m-0 fs-14'>Sponsor a Vaccination against life threatening diseases to stray dogs- <span className='fw-bold'>Rs 1200</span></p>
                  </div>
              </div>
              <div className='d-flex gap-4'> 
                  <div>
                    <p  className='m-0 fs-14'>Sponsor a  treatment of a sick/injured dog- <span className='fw-bold'>Rs 5000</span></p>
                  </div>
              </div>
          </div>
      </section>
      <Footer/>
    </>
  )
}

export default page