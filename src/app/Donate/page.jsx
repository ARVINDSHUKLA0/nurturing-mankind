import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar asBanner={false}/>
      <section className='py-lg-5 py-3'>
           <div className="container">
              <div>
                  <p className='fs-16'>Nurturing Mankind Bank details </p>
                  <p className='fs-16'>Donations can avail Income Tax benefit</p>
              </div>
           </div>
      </section>
      <Footer/>
    </>
  )
}

export default page