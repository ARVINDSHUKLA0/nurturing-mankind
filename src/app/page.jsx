'use client';
import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import styles from './page.module.css';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/Footer';

const Page = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <main>
      <Navbar />
      <Banner />
      <section className={` container py-130 ${styles.section}`}>
        <div className={styles.decorTop}>
          <Image src="/assets/img/np-bg-1.png" alt="leaf-top" width={160} height={270} />
        </div>

        <div className="container p-0">
          <div className="row align-items-center m-0">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div className={styles.blueBox}>
                <h2>Help protect the world's rainforests.</h2>
              </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row align-items-center m-0">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <h5 className={styles.title}>Diversity</h5>
                  <p className="fs-14">
                    The concept is based on the premise that differences in species composition between areas are correlated with differences in environmental conditions.
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <h5 className={styles.titleRed}>Sustainability</h5>
                  <p className="fs-14">
                    Responsible interaction with the environment to avoid depletion or degradation of natural resources and allow for long-term environmental quality.
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-md-5 mt-lg-3">
                  <h5 className={styles.titleOrange}>Ethics & Value</h5>
                  <p className="fs-14">
                    Our project concerns human beings' ethical relationship with the natural environment. A serious problem exists with respect to the status and meaning of ,'environmental values'.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.decorBottom}>
          <Image src="/assets/img/np-bg-2.png" alt="leaf" fill />
        </div>

      </section>

      <section className={`${styles.imgesContent}`}>
        <div className="row m-0">
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-0 position-relative">
            <div className={`${styles.imgesContinerCenter}`}>
              <img className='img-fluid' src="/assets/img/Imges-1.jpg" alt="" />
            </div>
            <div className={`${styles.ImgesPostion}`}>
              <h6 className='text-white fw-bold text-uppercase'>Glacier Melt</h6>
              <p className='fs-12 text-white'>The concept is based on the premise that differences in species composition between areas are correlated with differences in environmental conditions.</p>
              <p className='text-uppercase fs-12 fw-bold text-white'>learn more <span> <i className="fa-solid fa-arrow-right text-white ps-2 fs-14"></i></span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-0 position-relative">
            <div className={`${styles.imgesContinerCenter}`}>
              <img className='img-fluid' src="/assets/img/Imges-2.jpg" alt="" />
            </div>
            <div className={`${styles.ImgesPostion}`}>
              <h6 className='text-white fw-bold text-uppercase'>Species Protection</h6>
              <p className='fs-12 text-white'>The concept is based on the premise that differences in species composition between areas are correlated with differences in environmental conditions.</p>
              <p className='text-uppercase fs-12 fw-bold text-white'>learn more <span> <i className="fa-solid fa-arrow-right text-white ps-2 fs-14"></i></span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-0 position-relative">
            <div className={`${styles.imgesContinerCenter}`}>
              <img className='img-fluid' src="/assets/img/Imges-3.jpg" alt="" />
            </div>
            <div className={`${styles.ImgesPostion}`}>
              <h6 className='text-white fw-bold text-uppercase'>Water Cycle</h6>
              <p className='fs-12 text-white'>The concept is based on the premise that differences in species composition between areas are correlated with differences in environmental conditions.</p>
              <p className='text-uppercase fs-12 fw-bold text-white'>learn more <span> <i className="fa-solid fa-arrow-right text-white ps-2 fs-14"></i></span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-0 position-relative">
            <div className={`${styles.imgesContinerRight}`}>
              <img className='img-fluid' src="/assets/img/Imges-4.jpg" alt="" />
            </div>
            <div className={`${styles.ImgesPostion}`}>
              <h6 className='text-white fw-bold text-uppercase'> Disaster Management</h6>
              <p className='fs-12 text-white'>The concept is based on the premise that differences in species composition between areas are correlated with differences in environmental conditions.</p>
              <p className='text-uppercase fs-12 fw-bold text-white'>learn more <span> <i className="fa-solid fa-arrow-right text-white ps-2 fs-14"></i></span></p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container py-130">
          <div className="row">
            <div className={`col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-md-start justify-content-md-end mb-4`}>
              <div className={`${styles.customBorderContent} px-5`}>
                <h2>Our Mission</h2>
                <p className='fs-12 py-md-3'>We push the change in technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost. Imagine a world where the energy needs of all humans are met efficiently without damaging the atmosphere.</p>
                <p className='fs-12 py-md-1'> <span><i className="fa-regular fa-circle-dot cutom-all-bg text-white rounded-5"></i></span> Protect and enhance environment</p>
                <p className='fs-12 py-md-1'> <span><i className="fa-regular fa-circle-dot cutom-all-bg text-white rounded-5"></i></span> Keeping alive wildlife for future generations.</p>
                <p className='fs-12 py-md-1'> <span ><i className="fa-regular fa-circle-dot cutom-all-bg text-white rounded-5"></i></span> Risk assessment and information management.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-12 p-0">
              <div className="row m-0" ref={ref}>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className={` ${styles.MaginContent} ${styles.countbgOne} mb-3`}>
                    {inView && (
                      <h2 className='text-white'>
                        <CountUp end={70} duration={2} suffix="%" />
                      </h2>
                    )}
                    <p className='fs-10 text-white'>of the known cancer fighting plants exist only in the rainforest</p>
                  </div>
                  <div className='mb-3 d-none d-sm-block'>
                    <img className='img-fluid' src="/assets/img/first-row-count.jpg" alt="" />
                  </div>
                  <div className={`${styles.countbgTwo} ${styles.MaginContent} mb-3`}>
                    {inView && (
                      <h2 className='text-white'>
                        <CountUp end={978} duration={2} suffix="%" />
                      </h2>
                    )}
                    <p className='text-white fs-10'>regulations affect the manufacturing industry</p>
                  </div>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 m-0">
                  <div className='mb-3 d-none d-sm-block'>
                    <img className='img-fluid' src="/assets/img/send-row-count.jpg" alt="" />
                  </div>
                  <div className={`${styles.countbgThree} ${styles.MaginContent} mb-3`}>
                    {inView && (
                      <h2 className='text-white'>
                        <CountUp end={50} duration={2} suffix="%" />
                      </h2>
                    )}
                    <p className='text-white fs-10'>of the world's plants and animals are found in the rainforest</p>
                  </div>
                  <div className='bg-dark p-4 mb-3'>
                    <span className='fs-10 text-uuppercase text-white'>view more stats</span>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className={`${styles.countbgFour} ${styles.MaginContent} mb-3`}>
                    <div>
                      {inView && (
                        <h2 className='text-white'>
                          <CountUp end={20} duration={2} suffix="%" />
                        </h2>
                      )}
                      <p className='text-white fs-10'>of the world's oxygen comes from the Amazon rainforest</p>
                    </div>
                  </div>
                  <div className='mb-3 d-none d-sm-block'>
                    <img className='img-fluid' src="/assets/img/thred-row-count.jpg" alt="" />
                  </div>
                  <div className={`${styles.countbgFive} ${styles.MaginContent}`}>
                    {inView && (
                      <h2 className='text-white'>
                        <CountUp end={20} duration={2} suffix="%" />
                      </h2>
                    )}
                    <p className='text-white fs-10 text-upercase'>deaths a year caused by air pollution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' py-lg-5 py-3 bg-light'>
        <div className="container">
          <h2 className='my-5 ps-md-2 ps-1'>Protect and enhance <br /> environment for future <br />  generations.</h2>
          <div className="row m-0">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3 p-none">
              <div className='bg-white p-4 px-md-5'>
                <img className='img-fluid my-lg-3' src="/assets/img/svg-1.png" width={60} alt="" />
                <h6 className='text-uppercase my-2'>Sustainable Air & Climate</h6>
                <p className='fs-12'>We deserve clean air to breathe and a sustain-able future that is responsive to challenges by climate change.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3 p-none">
              <div className='bg-white p-4 px-md-5'>
                <img className='img-fluid my-lg-3' src="/assets/img/svg-2.png" width={60} alt="" />
                <h6 className='text-uppercase my-2'>Better Water Environment</h6>
                <p className='fs-12'>Water is at the heart of adaptation to climate change, it is the link between the climate, human society.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3 p-none">
              <div className='bg-white p-4 px-md-5'>
                <img className='img-fluid my-lg-3' src="/assets/img/svg-3.png" width={60} alt="" />
                <h6 className='text-uppercase my-2'>Save Energy</h6>
                <p className='fs-12'>Energy conservation are efforts made to reduce the consumption of energy by using less of an energy service.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3 p-none">
              <div className='bg-white p-4 px-md-5'>
                <img className='img-fluid my-lg-3' src="/assets/img/svg-4.png" width={60} alt="" />
                <h6 className='text-uppercase my-2'>Efficient Technology</h6>
                <p className='fs-12'>Reducing energy use reduces energy costs and result in a financial cost saving to consumers.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3 p-none">
              <div className='bg-white p-4 px-md-5'>
                <img className='img-fluid my-lg-3' src="/assets/img/svg-5.png" width={60} alt="" />
                <h6 className='text-uppercase my-2'>Water quality standards</h6>
                <p className='fs-12'>The surface water quality standards help protect, control and regulate the quality of fresh and marine waters.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mb-3 p-none">
              <div className='bg-white p-4 px-md-5'>
                <img className='img-fluid my-lg-3' src="/assets/img/svg-6.png" width={60} alt="" />
                <h6 className='text-uppercase my-2'>Efficient Technology</h6>
                <p className='fs-12'>Reducing energy use reduces energy costs and result in a financial cost saving to consumers.</p>
              </div>
            </div>
          </div>
        </div>


      </section>

      <section>
        <div className="row m-0">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-md-block d-none">
            <img className='img-fluid' src="/assets/img/send-row-count.jpg" alt="" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 position-relative mt-100">
            <div className='position-relative'>
              <img className='img-fluid' src="/assets/img/bottomImges-postion.jpg" alt="" />
              <div className={`${styles.ceoPostionImges}`} />
              <div className={`${styles.postionContent}`}>
                <h2>A word from Ross</h2>
                <div className='d-sm-flex d-block justify-content-between align-items-start'>
                  <div className='w-100'>
                    <p className='fs-12'>Nuclear fusion is what powers the stars and creates many of the elements that make up our universe.</p>
                    <p className='fs-12'>A fusion reaction occurs when two elements overcome fundamental forces of nature to join together under high temperatures and pressures.</p>
                    <div>
                      <img className='img-fluid' src="/assets/img/sign.png" width={130} alt="" />
                      <p className='fs-12 fw-bold  m-0'>Ross Marlow</p>
                      <p className='fs-12'>NaturePress CEO</p>
                    </div>
                  </div>
                  <div className='w-100'>
                    <p className='fs-12 ps-lg-2'>We push the change in technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost. Imagine a world where the energy needs of all humans are met efficiently without damaging the atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={`py-50 ${styles.zIndexCustom}`}>
        <div className="container">
          <div className="row">
            <div className="row m-0">
              <div className="col-lg-7 col-md-7 col-sm-12 col-12 p-none">
                <div className='d-sm-flex d-block justify-content-between px-md-4 px-2 p-none'>
                  <div className='w-100 position-relative'>
                    <p className='text-uppercase fs-10 fw-bold'>Latest Organization News</p>
                    <h3 className='fw-bold'>Newsroom</h3>
                    <div className={`${styles.CustomPostionHeight}`}>
                      <img className='w-75' src="/assets/img/np-bg-3.png"alt="" />
                    </div>
                  </div>
                  <div className='w-100'>
                    <p className='text-uppercase fs-10'>August 11, 2017</p>
                    <p className='fs-16 fw-bold'>Top Turtle Rescue Projects Around the World</p>
                    <div className={`${styles.slantedBox}`}></div>
                    <p className='fs-10'>The prevalence of widespread environmental pollution - the introduction of contaminants into...</p>
                    <p className='text-uppercase fs-10'>July 21, 2017</p>
                    <p className='fs-16 fw-bold'>How Drones Can Save Rainforests</p>
                    <div className={`${styles.slantedBox}`}></div>
                    <p className='fs-10'>The emergence of large factories gave rise to unprecedented amount of air and water pollution....</p>
                    <p className='text-uppercase fs-10'>May 13, 2017</p>
                    <p className='fs-16 fw-bold'>The Idea to “Crowd-source” saving the coast?</p>
                    <div className={`${styles.slantedBox}`}></div>
                    <p className='fs-10 '>The introduction of contaminants into the natural environment causing an adverse change in mostly...</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                   <div> 
                      <p className='fs-8'>Kim Preshoff presents “Why is biodiversity so important?”</p>
                       <div>
                          <img className='img-fluid' src="/assets/img/footer-top-img.jpg" alt="" />
                       </div>
                   </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className={`${styles.footerHome}`}>
          <Footer/>
      </section>
    </main>
  );
}

export default Page;
