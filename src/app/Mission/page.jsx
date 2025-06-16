import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
    return (
        <> 
          <Navbar hasBanner={false}/>
           
           <section className='py-lg-5 py-3'>
               <div className='container'>
                  <h4 className='fw-bold'>Mission </h4>
                  <p className='fs-14'>To serve and uplift communities by integrating the values of sustainability, empathy, and inclusivity into every action. <br />  Our mission is to empower people, protect nature, preserve culture, and promote harmony — nurturing mankind while honoring the ethos of a sustainable planet.</p>
               </div>
           </section>
           <Footer/>

        </>
    )
}

export default page