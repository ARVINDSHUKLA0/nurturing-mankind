import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <section className='container'>
        <div className='py-lg-5 py-3'>
          <p className='fs-14'>The trust provides a safe, healthy and equitable environment at the workplace. It is a gender neutral and it maintains a non smoking and a no tobacco policy and is a POSH compliant.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default page