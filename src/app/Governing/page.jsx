import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar hasBanner={false}/>
       
      <section className='py-lg-5 py-3'>
           <div className="container">
               <div className="row m-0 text-center">
                   <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                       <div>
                            <img className='img-fluid' src="/assets/img/Governing.jpg" alt="" />
                            <p className='text-capitalize fs-18 pt-2 fw-bold'>lorem</p>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                       <div>
                            <img className='img-fluid' src="/assets/img/Governing.jpg" alt="" />
                             <p className='text-capitalize fs-18 pt-2 fw-bold'>lorem</p>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                       <div>
                            <img className='img-fluid' src="/assets/img/Governing.jpg" alt="" />
                             <p className='text-capitalize fs-18 pt-2 fw-bold'>lorem</p>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                       <div>
                            <img className='img-fluid' src="/assets/img/Governing.jpg" alt="" />
                             <p className='text-capitalize fs-18 pt-2 fw-bold'>lorem</p>
                       </div>
                   </div>
               </div>
           </div>
      </section>
      <Footer/>
    </>
  )
}

export default page