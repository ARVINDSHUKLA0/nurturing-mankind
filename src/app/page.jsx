'use client';
import Navbar from '@/components/navbar';
import Banner from '@/components/banner';
import styles from './page.module.css';  
import Footer from '@/components/Footer';
import Link from 'next/link';

const Page = () => { 
  return (
    <main>
      <Navbar hasBanner={true} />
      <Banner />
      <section className={` container py-130 ${styles.section}`}>
        <div className="container p-0">
          <div className="row align-items-center m-0">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
              <div className={styles.blueBox}>
                <h2>Nurturing Hope. Empowering Lives.</h2>
              </div>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="row align-items-center m-0">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <h5 className={styles.title}>Vision</h5>
                  <p className="fs-14">
                    To work towards nurturing the mankind and its related realms for the betterment of the quality of life on this planet
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <h5 className={styles.titleRed}>Mission </h5>
                  <p className="fs-14">
                    Nurturing the mankind by incorporating the ethos of a sustainable planet 
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-md-5 mt-lg-0">
                  <h5 className={styles.titleOrange}>Our Values</h5>
                  <p className="fs-14">
                    At Nurturing Mankind, our work is guided by a set of unwavering values that reflect...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.imgesContent} mb-5`}>
        <div className="row m-0">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 p-0 position-relative">
            <Link href="/DogRabies">
            <div className={`${styles.imgesContinerCenter}`}>
              <img className='img-fluid' src="/assets/img/Imges-1.jpg" alt="" />
            </div>
            <div className={`${styles.ImgesPostion}`}>
              <h6 className='text-white fw-bold text-uppercase'>Eradicating Dog mediated Rabies by 2030 </h6>
              <p className='fs-12 text-white'>It is estimated that the stray dog population in the Delhi NCR region is more than 10 lakh of which the Noida region alone consists of approx. 70,000 stray  Reed more...</p>
              <p className='text-uppercase fs-12 fw-bold text-white'>learn more <span> <i className="fa-solid fa-arrow-right text-white ps-2 fs-14"></i></span></p>
            </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 p-0 position-relative">
            <Link href="/DoghitRun">
            <div className={`${styles.imgesContinerCenter}`}>
              <img className='img-fluid' src="/assets/img/Imges-2.avif" alt="" />
            </div>
            <div className={`${styles.ImgesPostion}`}>
              <h6 className='text-white fw-bold text-uppercase'>Reducing Stray Dogs Hit & Run Road Fatalities </h6>
              <p className='fs-12 text-white'>On a day to day basis especially during low visibility in urban areas many accidents happen due to the sudden appearance of a stray dog on the Reed more...</p>
              <p className='text-uppercase fs-12 fw-bold text-white'>learn more <span> <i className="fa-solid fa-arrow-right text-white ps-2 fs-14"></i></span></p>
            </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 p-0 position-relative">
            <Link href="/DogVaccinating">
            <div className={`${styles.imgesContinerCenter}`}>
              <img className='img-fluid' src="/assets/img/Imges-3.jpeg" alt="" />
            </div>
            <div className={`${styles.ImgesPostion}`}>
              <h6 className='text-white fw-bold text-uppercase'>Vaccinating Stray Dogs against life threatening diseases </h6>
              <p className='fs-12 text-white'>There are several diseases which are life threatening in nature for dogs, with rabies and canine distemper being particularly serious Reed more...</p>
              <p className='text-uppercase fs-12 fw-bold text-white'>learn more <span> <i className="fa-solid fa-arrow-right text-white ps-2 fs-14"></i></span></p>
            </div>
            </Link>
          </div>
        </div>
      </section>


  

      <section className={`${styles.footerHome}`}>
        <Footer />
      </section>
    </main>
  );
}

export default Page;
