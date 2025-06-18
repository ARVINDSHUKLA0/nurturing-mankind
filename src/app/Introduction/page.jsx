import React from 'react'
import '../Introduction/Introduction.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>
      <Navbar hasBanner={false} />
      <section className='py-lg-5 py-3'>
        <div className="container">
          <h4 className='fw-bold'>About us </h4>
          <p className='fs-14'>Nurturing Mankind has been started by a team of passionate individuals who want to create a positive impact on the society by providing basic education, healthcare, creating livelihood opportunities by fostering growth in sync with traditional craft and sustainable eco friendly materials with a focus on women empowerment, protecting and conservation of animal life and environment, working towards disaster mitigation and working towards poverty alleviation. 
</p>
          {/* <p className='fs-14'>is a heartfelt initiative born from the shared vision of a dedicated team of individuals who believe that meaningful change begins with empathy, action, and community engagement. Driven by a deep sense of social responsibility, we aim to create a lasting and positive impact on society by addressing some of its most pressing challenges through holistic, grassroots-led development.
            At the core of Nurturing Mankind is a mission to uplift underprivileged communities by providing.  <span className='fw-bold text-capitalize'> basic education, accessible healthcare, and sustainable livelihood .</span></p> */}

            {/* <p className='fw-bold fs-18 text-capitalize'>opportunities</p>
            <p className='fs-14'>We believe that education is the foundation of empowerment, healthcare is a basic right, and dignified work is the key to self-reliance. Our programs are designed to reach people at the margins—those most often overlooked—and to equip them with the tools, knowledge, and support they need to lead healthier, more secure lives. One of our unique pillars is the promotion of <span className='fw-bold text-capitalize'>traditional craftsmanship and eco-friendly practices.</span>  By reviving indigenous arts and using sustainable, locally sourced materials, we not only generate income for rural artisans but also protect cultural heritage and reduce environmental impact. These efforts are rooted in our belief that progress should not come at the cost of the planet, but in harmony with it. We place a strong emphasis on <span className='fw-bold text-capitalize'>women empowerment, </span> recognizing that when women are educated, financially independent, and given leadership roles, entire communities flourish. Through training programs, skill development, micro-financing, and mentorship, we create safe and supportive environments for women to thrive and become change agents in their own right. Our compassion extends beyond human welfare. We are equally committed to the.</p>
            <p className='fw-bold fs-18 text-capitalize '>protection and conservation of animal life,</p>
            <p className='fs-14'>especially stray and community animals, through our free vaccination, rescue, and awareness programs. In tandem, our <span className='fw-bold text-capitalize'>environmental initiatives</span> aim to preserve natural ecosystems through tree plantation drives, waste reduction campaigns, and environmental education. In times of crisis—whether it be a natural disaster, a health emergency, or economic distress—we respond swiftly with <span className='fw-bold text-capitalize'>disaster relief and mitigation </span> support, delivering food, medical aid, and shelter to those in need. At a broader level, we work persistently towards <span className='fw-bold text-capitalize'>poverty alleviation</span> addressing root causes through integrated community development models. <br />
            Nurturing Mankind stands for inclusive growth—where no life is left behind, no voice unheard, and no effort wasted. Our approach is collaborative, transparent, and rooted in the belief that small acts of kindness, when multiplied, can transform the world. <br />
            Together, we're not just serving communities—we're nurturing them. For a better today. For a brighter tomorrow. 
            </p> */}
        </div>
      </section>

      <Footer/>

    </>
  )
}

export default Page