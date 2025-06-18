import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import React from 'react'
import '../Sponsor/Sponsor.css'

const page = () => {
  return (
    <>
      <Navbar hasBanner={false} />
      <section className='pt-lg-3 pb-lg-5 py-3'>
        <div className="container py-lg-4 py-2">
          <h2 className="text-center text-danger fst-italic">Choose Your Perfect Plan</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card pricing-card h-100">
                <div className="card-header pricing-header basic-header p-4">
                  <h4 className="card-title text-center mb-0">Dog Vaccination </h4>
                </div>
                <div className="card-body p-4 text-center">
                  <div className='custom-height-imges'>
                    <img className='img-fluid' src="/assets/img/dog-price-1.png" width={150} height={150} alt="" />
                    <p className='fs-14'>Sponsor a Stray Dog Vaccination against Rabies for a Year</p>
                    <p className='fs-16 fw-bold text-end m-0'>Rs-700</p>
                  </div>
                  <div className="text-center pt-lg-5 py-3">
                    <a href="#" className="btn btn-dark  btn-custom">Choose Plan</a>
                  </div>
                </div>

              </div>
            </div>

            <div className="col">
              <div className="card pricing-card h-100">
                <div className="card-header pricing-header pro-header p-4">
                  <h4 className="card-title text-center mb-0">Vaccination against life </h4>
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title text-center mb-4">
                    <div className='custom-height-imges'>
                      <img className='img-fluid' src="/assets/img/dog-price-1.png" width={150} height={150} alt="" />
                      <p className='fs-14'>Sponsor a Vaccination against life threatening diseases to stray dogs </p>
                      <p className='fs-16 fw-bold text-end m-0'>Rs-1200</p>
                    </div>
                  </h2>
                  <div className="text-center">
                    <a href="#" className=" btn btn-outline-primary btn-custom">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="col">
              <div className="card pricing-card h-100">
                <div className="card-header pricing-header enterprise-header p-4">
                  <h4 className="card-title text-center mb-0">Treatment sick/injured dog</h4>
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title text-center mb-4"> 
                     <div className='custom-height-imges'>
                      <img className='img-fluid' src="/assets/img/dog-price-1.png" width={150} height={150} alt="" />
                      <p className='fs-14 py-3'>Sponsor a  treatment of a sick/injured dog </p>
                      <p className='fs-16 fw-bold text-end m-0'>Rs-5000</p>
                    </div>
                  </h2>
                  
                  <div className="text-center">
                    <a href="#" className="btn btn-dark btn-custom">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page