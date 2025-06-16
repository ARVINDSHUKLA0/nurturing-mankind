import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar hasBanner={false}/>

      <section className='py-lg-5 py-3'>
          <div className="container">
              <h4 className='fw-bold'>Eradicating Dog mediated Rabies by 2030 </h4>
              <p className='fs-14'>It is estimated that the stray dog population in the Delhi NCR region is more than 10 lakh of which the Noida region alone consists of approx. 70,000 stray dogs across the 88 residential societies. There has been more than 15 lakh of dog bites reported in the country of which 2 lakh cases of dog bites reported in the Delhi NCR region Noida itself recorded 1 lakh plus cases last year which was an increase of 31% increase which has led to a huge outcry amongst the common citizen. <br /> Due to the increase in the cases of dog bites leading to human dog conflict there is an hue and cry amongst the citizens to contain the population of the dogs especially the stary dogs. There have been few instances of dog bites by the domesticated pets inside the societies which has led to the municipal corporation putting a ban on keeping dogs which have been identified as dangerous breed.</p>
              <p className='fw-bold fs-20'>The cases of dog bites lead to :  </p>
              <p className='fs-14'>Infections </p>
              <p className='fs-14'>Rabies </p>
              <p className='fs-14'>Nerve & Muscle Damage </p>
              <p className='fs-14'>Tearing or Crushing of Tissues </p>
              <p className='fs-14'>Bruising, Bleeding & Swelling </p>
              <p className='fs-14 m-0'>Deep or Large Wounds </p>
              <p className='fs-14 m-0'>Tendon or Joint Injury </p>
              <p className='fs-14 m-0'>Pain, Numbness & Tingling.</p>
              <p className='fs-14 m-0'>The organization is vaccinating the stray dogs in the Noida, Greater Noida region free of cost against Rabies through its state art of the art mobile clinic which is manned by certified and well trained doctors and para vets.  </p>
          </div>
      </section>
     
     <Footer/>
    </>
  )
}

export default page