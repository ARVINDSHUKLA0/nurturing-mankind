import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar hasBanner={false} />
      <section className='py-lg-5 py-3'>
        <div className="container">
          <h4 className='fw-bold'>Vaccinating Stray Dogs against life threatening diseases </h4>
          <p className='fs-14'>There are several diseases which are life threatening in nature for dogs, with rabies and canine distemper being particularly serious. Other potentially fatal illnesses include parvovirus, heartworm disease, and leptospirosis. While some diseases like kennel cough and ringworm are not usually fatal, they can still be dangerous, especially for puppies or senior dogs.</p>
          <p className='fs-14'>1. Rabies: This viral disease attacks the brain and spinal cord, and is always fatal if not treated. It can be transmitted through saliva, usually by a bite from an infected animal.  </p>
          <p className='fs-14'>2. Canine Distemper: This highly contagious viral disease can cause a range of symptoms, including fever, coughing, vomiting, and paralysis. It can be prevented with vaccinations.  </p>
          <p className='fs-14'>3. Parvovirus (Parvo): Parvo is a highly contagious viral disease that attacks the digestive system, causing severe vomiting, diarrhea, and potentially dehydration. It's especially dangerous for puppies.  </p>
          <p className='fs-14'>4. Heartworm Disease: Caused by parasitic worms, heartworm disease can damage the heart and lungs, leading to severe complications and, if untreated, death. It's transmitted by infected mosquitoes.  </p>
          <p className='fs-14'>5. Leptospirosis: This bacterial disease affects the kidneys and liver, and can also lead to kidney failure, liver failure, and death. It's spread through contact with infected urine or contaminated water.</p>
          <p className='fs-14 m-0'>Other potentially dangerous diseases: </p>
          <p className='fs-14'>Lyme Disease: </p>
          <p className='fs-14 m-0'>Transmitted by ticks, Lyme disease can cause joint pain, lethargy, and in severe cases, neurological issues and even death.  </p>
          <p className='fs-14'>Canine Influenza: </p>
          <p className='fs-14'>A respiratory illness that can be serious, especially in puppies or senior dogs.  </p>
          <p className='fs-14 m-0'>Kennel Cough: </p>
          <p className='fs-14 m-0'>While not always fatal, kennel cough can cause a persistent, hacking cough and can lead to complications in vulnerable dogs.  </p>
          <p className='fs-14 m-0'>Ringworm: </p>
          <p className='fs-14 m-0'>While not fatal, ringworm is a fungal infection that can cause skin irritation, hair loss, and may be contagious to humans.  </p>
          <p className='fs-14 m-0'>The organisation is running a campaign to vaccinate the stray dogs against these life threatening diseases which will help increase the life span of these dogs. </p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default page