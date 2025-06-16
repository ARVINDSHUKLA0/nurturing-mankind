import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return ( 
    <>
      <Navbar  hasBanner={false}/>
       <section className='py-lg-5 py-3'>
           <div className="container">
               <h4 className='fw-bold'>Livelihood </h4>
               <p className='fs-14'>at <span className='fst-italic text-capitalize'> Nurturing Mankind,</span>  we believe that economic independence is key to empowerment — especially for women in underserved communities. Our <span className='fw-bold text-capitalize'>Livelihood Program </span> is focused on providing <span className='fw-bold text-capitalize'>vocational training, skill development,</span> and  <span className='fw-bold text-capitalize'>market linkages</span> <br /> We offer hands-on training in traditional crafts, eco-friendly product making, tailoring, food processing, and other skill-based activities tailored to local needs. Once trained, women are connected to <span className='fw-bold text-capitalize'> self-employment opportunities, micro-enterprises,</span> and  <span className='fw-bold text-capitalize'>fair trade markets,</span> allowing them to earn with dignity while contributing to their families and communities. <br /> Our approach not only helps break the cycle of poverty but also <span className='fw-bold text-capitalize'>revives traditional skills, supports local economies,</span>and  <span className='fw-bold text-capitalize'>promotes environmental sustainability</span>through conscious production practices. <br />By turning skills into livelihoods, we are building a generation of <span className='fw-bold text-capitalize'>financially independent, confident, and resilient women</span> who lead change from the ground up.</p>
           </div>
       </section>
       <Footer/>
    </>
  )
}

export default page