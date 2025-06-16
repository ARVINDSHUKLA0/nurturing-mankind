import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar hasBanner={false}/>
      <section className='py-lg-5 py-3'>
          <div className="container">
              <div className='d-flex gap-4'> 
                  <div>
                    <p  className='m-0 fs-14'>Sponsor a Stray Dog Vaccination against Rabies for a Year - </p>
                  </div>
                  <div>
                     <p className='fw-bold m-0 fs-16'>Rs 700</p>
                  </div>
              </div>
              <div className='d-flex gap-4'> 
                  <div>
                    <p  className='m-0 fs-14'>Sponsor a Vaccination against life threatening diseases to stray dogs-</p>
                  </div>
                  <div>
                     <p className='fw-bold m-0 fs-16'>Rs 1200</p>
                  </div>
              </div>
              <div className='d-flex gap-4'> 
                  <div>
                    <p  className='m-0 fs-14'>Sponsor a  treatment of a sick/injured dog-</p>
                  </div>
                  <div>
                     <p className='fw-bold m-0 fs-16'>Rs 5000</p>
                  </div>
              </div>
          </div>
      </section>
      <Footer/>
    </>
  )
}

export default page