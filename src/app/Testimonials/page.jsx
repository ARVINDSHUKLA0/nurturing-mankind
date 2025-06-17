import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
     <Navbar hasBanner={false}/>
     <section className='py-lg-5 py-3'>
         <div className="container">
             <h4 className='fw-bold fst-italic'>Neha - Volunteer</h4>
             <p className='fs-12 text-uppercase fst-italic'>"Volunteering with Nurturing Mankind has been a life-changing experience. I never imagined how fulfilling it would be to help vaccinate and protect street dogs. Each camp reminded me why I chose this path — to heal, to serve, and to create safer communities for both animals and humans." </p>
             <h4 className='fst-italic fw-bold'>Savitri Devi - Local Resident</h4>
             <p className='fst-italic text-uppercase fs-12'>"We used to be scared of the stray dogs in our lane, especially for our children. But after the free vaccination drive by Nurturing Mankind, not only are the dogs healthier, but they've become part of our neighborhood. We even feed them now — they are no longer feared, they're family." </p>
             <h4 className='fst-italic fw-bold'> Ravi Kumar - Dog Feeder</h4>
             <p className='fst-italic fs-12 text-uppercase'>"As someone who feeds over 20 dogs a day, it used to worry me constantly — what if one of them fell sick or bit someone? Thanks to the free vaccination campaign, that worry is gone. The team is professional, kind, and truly dedicated to both animals and people." </p>
         </div>
     </section>

     <Footer/>
    </>
  )
}

export default page