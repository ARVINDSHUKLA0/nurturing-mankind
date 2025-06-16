import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar hasBanner={false}/>
      <section className='py-lg-5 py-3'>
           <div className='container'>
                <h4 className='fw-bold'>Vision</h4>
                <p className='fs-14'> To nurture mankind and all interconnected realms of life — human, animal, and environmental — with the aim of enhancing the quality of life on Earth. <br /> We envision a compassionate and sustainable world where every being lives with dignity, harmony, and purpose.</p>
           </div>
      </section> 
      <Footer/>
    </>
  )
}

export default page