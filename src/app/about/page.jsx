'use client'
import React from 'react'
import '../about/about.css'
import Navbar from '@/components/navbar'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    const teamMembers = [
        {
            name: 'Lawrence Petrie',
            description: 'A keen yachtsman and editor of a cruising guide, Lawrence is constantly reminded of the effects of pollution in.',
            img: '/assets/img/about-profile-1.jpg',
            socials: ['facebook', 'twitter', 'medium', 'linkedin']
        },
        {
            name: 'Lucas Aquilani',
            description: 'She is an avid beach-goer and commits to doing what she can to keep world beautiful, clean and healthy.',
            img: '/assets/img/about-profile-1.jpg',
            socials: ['twitter', 'github', 'instagram']
        },
        {
            name: 'Ruth Aquilani',
            description: 'She is an avid beach-goer and commits to doing what she can to keep world beautiful, clean and healthy.',
            img: '/assets/img/about-profile-1.jpg',
            socials: ['facebook', 'twitter', 'youtube', 'medium']
        },
        {
            name: 'Jane Ansems',
            description: 'The appreciation and love that she has for wildlife and animals makes her especially concerned about environment.',
            img: '/assets/img/about-profile-1.jpg',
            socials: ['facebook', 'twitter', 'youtube']
        }
    ];

    const socialIcons = {
        facebook: 'fab fa-facebook-f',
        twitter: 'fab fa-twitter',
        medium: 'fab fa-medium-m',
        linkedin: 'fab fa-linkedin-in',
        github: 'fab fa-github',
        instagram: 'fab fa-instagram',
        youtube: 'fab fa-youtube'
    };

    return (
        <>
            <section className='aboutBanner'>
                <Navbar />
                <div className='container'>
                    <div className='about-banner-postion'>
                        <p className='text-white fs-12 text-uppercase fw-bold'>who are you</p>
                        <h1 className='text-white fw-bold'>About Us</h1>
                        <p className='text-white fs-12 mb-1 p-0 '>NaturePress is a non-profit organization dedicated to the rescue, <br /> rehabilitation and release of injured, sick and orphaned wildlife. Our <br /> ultimate objective is to assist in the recovery and release of native wildlife.</p>
                        <div className="row m-0">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 p-0">
                                <div className='about-warp-content'>
                                    <p className='fs-12 px-2 text-uppercase text-white fw-bold m-0 py-2'>Taking part was the best thing I have ever done.</p>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='about-imges-rounded px-2'>
                                            <img className='img-fluid' src="/assets/img/aboutwrap1.jpg" alt="" width={30} />
                                        </div>
                                        <div>
                                            <p className='fs-14 text-white m-0 p-0'> Monica Wright</p>
                                            <p className='fs-12 text-white m-0 p-0 fw-bold'>Fuse Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                                <div className='about-warp-content'>
                                    <p className='fs-12 px-2 text-uppercase text-white fw-bold m-0 py-sm-2 py-2'>Taking part was the best thing I have ever done.</p>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='about-imges-rounded px-2'>
                                            <img className='img-fluid' src="/assets/img/aboutwrap1.jpg" alt="" width={30} />
                                        </div>
                                        <div>
                                            <p className='fs-14 text-white m-0 p-0'> Monica Wright</p>
                                            <p className='fs-12 text-white m-0 p-0 fw-bold'>Fuse Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                                <div className='about-warp-content'>
                                    <p className='fs-12 px-2 text-uppercase text-white fw-bold m-0 py-2'>Taking part was the best thing I have ever done.</p>
                                    <div className='d-flex align-items-center gap-2'>
                                        <div className='about-imges-rounded px-2'>
                                            <img className='img-fluid' src="/assets/img/aboutwrap1.jpg" alt="" width={30} />
                                        </div>
                                        <div>
                                            <p className='fs-14 text-white m-0 p-0'> Monica Wright</p>
                                            <p className='fs-12 text-white m-0 p-0 fw-bold'>Fuse Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-50">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div>
                                <p className='text-uppercase fs-10'>This is our Mission...</p>
                                <h2>We believe in Bright Future</h2>
                                <div className='my-sm-5'>
                                    <div className='d-sm-flex d-block justify-content-between align-items-center'>
                                        <div className='about-custom-border-top w-100 mx-sm-2'>
                                            <p className='fs-12 text-uppercase fw-bold'>diversity</p>
                                            <p className='fs-10'>The concept is based on the premise that differences in species composition between areas are correlated with differences in environmental conditions.</p>
                                        </div>
                                        <div className='about-custom-border-top w-100'>
                                            <p className='fs-12 text-uppercase fw-bold'>sustainability</p>
                                            <p className='fs-10'>Responsible interaction with the environment to avoid depletion or degradation of natural resources and allow for long-term environmental quality.</p>
                                        </div>
                                    </div>
                                    <div className='d-sm-flex d-block justify-content-between align-items-center mx-sm-2'>
                                        <div className='about-custom-border-top w-100 me-sm-2'>
                                            <p className='text-uppercase fs-12 fw-bold'>Technology</p>
                                            <p className='fs-10'>The concept is based on the premise that differences in species composition between areas are correlated with differences in environmental conditions.</p>
                                        </div>
                                        <div className='about-custom-border-top w-100'>
                                            <p className='fs-12 text-uppercase fw-bold'>ethics & value</p>
                                            <p className='fs-10'>Our project concerns human beings' ethical relationship with the natural environment. A serious problem exists with respect to the status and meaning of 'environmental values'.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className='d-sm-flex d-block gap-3'>
                                <div className='d-md-block d-none'>
                                    <div className='mb-3'>
                                        <img className='img-fluid' src="/assets/img/footer-top-img.jpg" alt="" />

                                    </div>
                                    <div className='future-about-imges-height mb-3'>
                                        <img className='img-fluid' src="/assets/img/send-row-count.jpg" alt="" />
                                    </div>
                                </div>

                                <div>
                                    <div className=' mb-3'>
                                        <img className='img-fluid' src="/assets/img/about-sub.jpg" alt="" />
                                    </div>
                                    <div className='d-md-block d-none'>
                                        <img className='img-fluid' src="/assets/img/np-bg-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-50 bg-light'>
                <div className="container">
                    <h2 className='text-sm-center mb-3'>Protect and enhance environment for <br /> future generations.</h2>
                    <div className="d-sm-flex d-block justify-content-between gap-sm-4 align-items-center py-sm-4 custom-text-align" ref={ref}>
                        <div>
                            {inView && <h2><CountUp end={70} duration={2} suffix="%" /></h2>}
                            <p className='fs-12'>of the known cancer fighting plants exist only in the rainforest</p>
                        </div>
                        <div>
                            {inView && <h2><CountUp end={50} duration={2} suffix="%" /></h2>}
                            <p className='fs-12'>of the known cancer fighting plants exist only in the rainforest</p>
                        </div>
                        <div>
                            {inView && <h2><CountUp end={978} duration={2} suffix="%" /></h2>}
                            <p className='fs-12'>of the known cancer fighting plants exist only in the rainforest</p>
                        </div>
                        <div>
                            {inView && <h2><CountUp end={7} duration={2} suffix="M" /></h2>}
                            <p className='fs-12'>of the known cancer fighting plants exist only in the rainforest</p>
                        </div>
                        <div>
                            {inView && <h2><CountUp end={20} duration={2} suffix="%" /></h2>}
                            <p className='fs-12'>of the known cancer fighting plants exist only in the rainforest</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='py-100 bg-light'>
                <div className="container">
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                <div className="card border-0">
                                    <div className="position-relative">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            width={200}
                                            height={200}
                                            className="card-img-top img-fluid"
                                        />
                                        <div className={`d-flex socialIcons`}>
                                            {member.socials.map((icon, i) => (
                                                <button key={i} className="btn btn-sm cutom-all-bg text-white m-1 rounded-0">
                                                    <i className={socialIcons[icon]}></i>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{member.name}</h5>
                                        <p className="card-text text-secondary fs-12">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

