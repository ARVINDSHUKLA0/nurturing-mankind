import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import '../AnimalWelfa/AnimalWelfa.css'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar hasBanner={false} />
      <section className='py-lg-5 py-3'>
        <div className="container text-warp">
          <h4 className='fw-bold'>Animal Welfare </h4>
          <p className='fs-14'>Despite the growing awareness of animal welfare, many animals in our community remain, neglected, or abused. shelters are often overcrowded, leading to high euthanasia rates and limited resources for care and rehabilitation. Moreover, misconceptions about stray animals—such as the belief that they are dangerous or unhealthy—deter potential animal lovers from considering these strays as viable companions. This results in a significant gap between the number of animals in need of care.
            There is an estimated 20000 human deaths reported in India due to cases of dog bites. Most of the death are due to the rabies infection. Many of the bites and deaths are not reported due to underreporting due to lack of awareness, poor access to treatment, and weak surveillance system.  <br /> In addition to this, many pet lovers lack access to essential resources and education regarding responsible pet care, leading to increased instances of abandonment, neglect, and unsafe living conditions for pets. Without a comprehensive program to address these issues, our community will continue to face challenges in ensuring the well-being of animals. Therefore, there is an urgent need for a robust pet care and welfare program that fosters awareness, promotes responsible pet care, and connects individuals with suitable pets, ultimately creating a compassionate community that values and cares for its animals.
            The deadliest infection which is leading to high number of deaths is because of the rabies infection. Rabies is one of the oldest diseases known to man and has been widely documented by the earliest human civilizations. The disease has caused extensive mortality in pet animals such as purebred dogs. Rabies is a neglected tropical zoonotic disease transmitted through the bite of rabid animal mostly by dogs which is almost hundred percent fatal yet hundred percent preventable by timely vaccination. As per WHO estimates, globally, there are 59,000 human deaths due to dog-mediated rabies. India contributes to one third of the total global burden due to rabies and two-third of rabies burden in the South East Asia Region as per the WHO-APCRI 2004 Survey. In 2015, the world called for action by setting a goal of “Zero human deaths due to dog-mediated rabies by 2030”, worldwide. Subsequently, four organizations - the World Health Organization (WHO), the World Organization for Animal Health (OIE), the Food and Agriculture Organization of the United Nations (FAO), and the Global Alliance for Rabies Control (GARC) - have joined forces, as the United Against Rabies collaboration, and determined to reach the global target of “Zero human deaths due to dog-mediated Rabies by 2030”. Countries like Western Europe, Canada, the US, Mexico, Japan & Latin America have already eliminated dog-mediated Rabies through successful canine rabies vaccination and One health approach. In India, Rabies is endemic in all States/UTs except Andaman and Nicobar, and Lakshadweep Islands, and 96% of the mortality and morbidity due to Rabies is associated with dog bites. Although Rabies affects people of all age groups, children are the most vulnerable which constitutes 40% of people exposed to dog bites in Rabies-endemic areas.   <br /> Canine Parvovirus is another disease which is a cause of high case of mortality amongst the dog. The last outbreak in India of Canine Parvovirus was reported in West Bengal due to which hundred of dogs were affected. This virus is highly contagious and has a high potential of rapid spread.  <br />The bond between humans and animals is a profound and transformative connection that enriches our lives and communities. However, the plight of homeless and abandoned pets continues to be a pressing issue that demands our immediate attention and action. “Fostering Love and Care: Proposal for Pet Care and Welfare Programs under Project <span className='fw-bold'>Pawtech Shield</span>  aims to address this challenge by creating a comprehensive framework that promotes responsible pet care, enhances adoption rates, and improves the overall welfare of animals in our community.    </p>
          <p className='fs-20 fw-bold text-capitalize'>Objective  </p>
          <p className='fs-14 m-0'>Eliminate Dog mediated rabies by 2030 </p>
          <p className='fs-14 m-0'>Reduce Mortality rate due to Canine Distemper, Parvo Virus and other life threatening diseases </p>
          <p className='fs-14 m-0'>Reducing Stray Dog Hit & Run Road Fatalities </p>
          <p className='fs-14 m-0'>Improve Public Awareness </p>
          <p className='fs-14 m-0'>Reduce Man Dog Conflict </p>
        </div>
      </section>

      <section className='py-lg-5 py-3'>
           <div className="row m-0 align-items-center justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-height mb-3">
                    <img className='img-fluid' src="/assets/img/img-1.jpeg" alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-height mb-3">
                    <img className='img-fluid' src="/assets/img/img-3.jpeg" alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 custom-height mb-3 ">
                    <img className='img-fluid' src="/assets/img/img-8.jpeg" alt="" />
                </div>
           </div>
      </section>

      <Footer/>

    </>
  )
}

export default page