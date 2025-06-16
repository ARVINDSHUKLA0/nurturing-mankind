import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar hasBanner={false}/>

      <section className='py-lg-5 py-3'>
             <div className="container">
                 <h4 className='fw-bold'>Reducing Stray Dogs Hit & Run Road Fatalities </h4>
                 <p className='fs-14'>On a day to day basis especially during low visibility in urban areas many accidents happen due to the sudden appearance of a stray dog on the street because of which the motorist in order to save the life of the dog applies hard break which results in accidents which many a times prove fatal. To mitigate this problem the organization is collaring the stray dogs with radium collars which glow in the dark which the motorists can see from a far off distance and can accordingly control the vehicle reducing the risk of collision.  </p>
             </div>
      </section>
      <Footer/>
      
    </>
  )
}

export default page