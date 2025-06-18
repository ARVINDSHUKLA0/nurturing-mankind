'use client';

import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import '../Donate/Donate.css';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Page = () => {
  const [activeBtn, setActiveBtn] = useState('one-time');
  const [step, setStep] = useState(1);
  const [selectedId, setSelectedId] = useState('');
  const [planType, setPlanType] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pin: '',
    city: '',
    state: '',
    idNumber: '',
    idType: '',
    date: '',
    amount: '',
    donationType: 'one-time'
  });

  const prices = {
    monthly: ['₹200', '₹500', '₹1000'],
    quarterly: ['₹600', '₹1500', '₹3000'],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formattedAmount = selectedAmount;
    if (typeof selectedAmount === 'string') {
      formattedAmount = selectedAmount.replace(/[^0-9]/g, '');
    }

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pin: formData.pin,
      type: activeBtn === 'one-time' ? 'One-time Donation' : 'Regular Donation',
      frequency: activeBtn === 'Regular' ? planType : 'One-time',
      amount: formattedAmount || 'Custom amount',
      idType: selectedId,
      idNumber: formData.idNumber,
      date: formData.date,
      donationType: activeBtn
    };

    emailjs.send(
      'service_agacp3j',
      'template_wzdu0ik',
      submissionData,
      'jBzDX5hdxylaJNC3l'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStep(3);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to submit form. Please try again.');
      });
  };

  return (
    <>
      <Navbar hasBanner={false} />
      <section>
        <div className="container py-lg-5 py-3">
          <div className="row m-0 justify-content-center align-items-center ">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-light custom-donate-main-conatiner py-5">
              <div className="text-center">
                <span className="text-center custom-donate-btn">
                  <button
                    className={`border-0 btn-one-time px-3  ${activeBtn === 'one-time' ? 'bg-danger text-white' : 'bg-transparent'}`}
                    onClick={() => {
                      setActiveBtn('one-time');
                      setStep(1);
                      setFormData(prev => ({ ...prev, donationType: 'one-time' }));
                    }}
                  >
                    One-time
                  </button>
                  <button
                    className={`border-0 btn-regular ms-3 px-3 py-1 ${activeBtn === 'Regular' ? 'bg-danger text-white' : 'bg-transparent'}`}
                    onClick={() => {
                      setActiveBtn('Regular');
                      setStep(1);
                      setFormData(prev => ({ ...prev, donationType: 'Regular' }));
                    }}
                  >
                    Regular
                  </button>
                </span>
              </div>
              <div className="text-center">
                {activeBtn === 'one-time' && step === 1 && (
                  <div>
                    <div className='d-flex justify-content-center align-items-center gap-3 my-3'>
                      <div><i className="fa-solid fa-gift"></i></div>
                      <p className='m-0 fs-14'>Choose an amount to donate</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-3 mb-3'>
                      <button
                        type="button"
                        className={`btn fs-14 ${selectedAmount === '20000' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedAmount('20000')}
                      >
                        20000
                      </button>
                      <button
                        type="button"
                        className={`btn fs-14 ${selectedAmount === '40000' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedAmount('40000')}
                      >
                        40000
                      </button>
                    </div>
                    <div className='d-flex justify-content-center gap-3 mb-4'>
                      <button
                        type="button"
                        className={`btn px-3 fs-14 ${selectedAmount === '5000' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedAmount('5000')}
                      >
                        5000
                      </button>
                      <button
                        type="button"
                        className={`btn px-3 fs-14 ${selectedAmount === '2000' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedAmount('2000')}
                      >
                        2000
                      </button>
                    </div>
                    <div className='mb-2'>
                      <input
                        type="number"
                        placeholder='Enter an amount'
                        className="form-control input-width-set mx-auto"
                        onChange={(e) => setSelectedAmount(e.target.value)}
                      />
                    </div>
                    <div className='d-flex justify-content-center gap-3 mb-2 py-2'>
                      <div><i className="fa-solid fa-image"></i></div>
                      <p className='m-0 fs-14'>Enter Your Credentials</p>
                    </div>
                    <form>
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='Name'
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="number"
                        placeholder='Phone Number'
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </form>
                    <button
                      className='btn btn-danger w-25 mt-3 fs-14'
                      onClick={() => setStep(2)}
                      disabled={!formData.name || !formData.email || !formData.phone || !selectedAmount}
                    >
                      Next
                    </button>
                    <p className="mt-2 fs-14">*Only Indian nationals can donate on this platform.</p>
                  </div>
                )}

                {activeBtn === 'one-time' && step === 2 && (
                  <div className='py-lg-5 py-3'>
                    <form onSubmit={handleSubmit}>
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='Address'
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="number"
                        placeholder='PIN Code'
                        name="pin"
                        value={formData.pin}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='City'
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='State'
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="mb-3">
                        <select
                          id="idSelect"
                          className="form-select input-width-set fs-14 mx-auto"
                          name="idType"
                          value={selectedId}
                          onChange={(e) => {
                            setSelectedId(e.target.value);
                            setFormData(prev => ({ ...prev, idType: e.target.value }));
                          }}
                          required
                        >
                          <option className='fs-14' value="">-- Select Identification --</option>
                          <option className='fs-14' value="aadhaar">Aadhaar</option>
                          <option className='fs-14' value="pan">PAN</option>
                        </select>
                      </div>
                      {selectedId && (
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control input-width-set mx-auto"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                            placeholder={
                              selectedId === 'aadhaar'
                                ? 'Enter Aadhaar Number'
                                : 'Enter PAN Number'
                            }
                            required
                          />
                        </div>
                      )}
                      <input
                        className='form-control input-width-set fs-14 mx-auto mb-2'
                        type="date"
                        placeholder='Date'
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />

                      <div className="d-flex justify-content-center gap-3 py-2 mx-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn btn-secondary w-25 mb-3"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className='btn btn-danger w-50 mb-3'
                          disabled={!formData.address || !formData.pin || !formData.city || !formData.state || !selectedId || !formData.idNumber || !formData.date}
                        >
                          Submit
                        </button>
                      </div>
                      <p className='fs-14'>*Only Indian nationals can donate on this platform.</p>
                    </form>
                  </div>
                )}
                 {activeBtn === 'one-time' && step === 3 && (
                  <div className='py-lg-3 py-3'>
                    <div className="row m-0 pt-lg-4 mb-3">
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start mb-3"> 
                           <p className='m-0 fs-14 fw-bold'>Bank Account Details</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Account Name</span>: Nurturing Mankind</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Account Type</span>: Current Account</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Account Number</span>: 201016195966</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>IFSC Code</span>: INDB001809</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Bank Branch</span>: Sector 31, Noida</p>
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end text-start mb-3"> 
                           <img className='img-fluid' src="/assets/img/payment.jpeg" />
                       </div>
                    </div>
                    <button
                      onClick={() => {
                        setStep(1);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          address: '',
                          pin: '',
                          city: '',
                          state: '',
                          idNumber: '',
                          idType: '',
                          date: '',
                          amount: '',
                          donationType: 'Regular'
                        });
                        setSelectedAmount(null);
                        setSelectedId('');
                        setPlanType('monthly');
                      }}
                      className="btn btn-primary fs-14"
                    >
                      Back
                    </button>
                  </div>
                )}
                {activeBtn === 'Regular' && step === 1 && (
                  <div className='py-lg-4 py-3'>
                    <div className='d-flex justify-content-center align-items-center gap-3 mb-2'>
                      <div><i className="fa-solid fa-gift"></i></div>
                      <p className='m-0 fs-14'>Choose an amount to donate</p>
                    </div>
                    <div className="py-3">
                      <button
                        className={`px-4 py-2 me-2 fs-14 border-0 rounded ${planType === 'monthly' ? 'bg-danger text-white' : 'bg-light text-dark'}`}
                        onClick={() => {
                          setPlanType('monthly');
                          setSelectedAmount(null);
                        }}
                      >
                        Monthly
                      </button>
                      <button
                        className={`px-4 py-2 fs-14 border-0 rounded ${planType === 'quarterly' ? 'bg-danger text-white' : 'bg-light text-dark'}`}
                        onClick={() => {
                          setPlanType('quarterly');
                          setSelectedAmount(null);
                        }}
                      >
                        Quarterly
                      </button>
                    </div>

                    <div className="d-flex mb-2 py-2 justify-content-center gap-3 flex-wrap">
                      {prices[planType].map((price, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`btn fs-14 ${selectedAmount === price ? 'btn-danger' : 'btn-outline-secondary'}`}
                          onClick={() => setSelectedAmount(price)}
                        >
                          {price}
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`btn fs-14 ${selectedAmount === 'other' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedAmount('other')}
                      >
                        Other
                      </button>
                    </div>
                    {selectedAmount === 'other' && (
                      <div className='mb-2 mt-3'>
                        <input
                          type="number"
                          placeholder='Enter custom amount'
                          className="form-control w-75 mx-auto"
                          onChange={(e) => setSelectedAmount(e.target.value)}
                        />
                      </div>
                    )}
                    <div className='d-flex justify-content-center gap-3 mb-3 py-1'>
                      <div><i className="fa-solid fa-image"></i></div>
                      <p className='m-0 fs-14'>Enter Your Credentials</p>
                    </div>
                    <form>
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='Name'
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="number"
                        placeholder='Phone Number'
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </form>
                    <button
                      className='btn btn-danger w-25 fs-14 my-2'
                      onClick={() => setStep(2)}
                      disabled={!formData.name || !formData.email || !formData.phone || !selectedAmount}
                    >
                      Next
                    </button>
                    <p className="mt-2 fs-14">*Only Indian nationals can donate on this platform.</p>
                  </div>
                )}
                {activeBtn === 'Regular' && step === 2 && (
                  <div className='py-lg-5 py-3'>
                    <form onSubmit={handleSubmit}>
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='Address'
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="number"
                        placeholder='PIN Code'
                        name="pin"
                        value={formData.pin}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='City'
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                      <input
                        className='form-control input-width-set mx-auto mb-2'
                        type="text"
                        placeholder='State'
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="mb-3">
                        <select
                          id="idSelect"
                          className="form-select input-width-set fs-14 mx-auto"
                          name="idType"
                          value={selectedId}
                          onChange={(e) => {
                            setSelectedId(e.target.value);
                            setFormData(prev => ({ ...prev, idType: e.target.value }));
                          }}
                          required
                        >
                          <option className='fs-14' value="">-- Select Identification --</option>
                          <option className='fs-14' value="aadhaar">Aadhaar</option>
                          <option className='fs-12' value="pan">PAN</option>
                        </select>
                      </div>
                      {selectedId && (
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control fs-14 input-width-set mx-auto"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                            placeholder={
                              selectedId === 'aadhaar'
                                ? 'Enter Aadhaar Number'
                                : 'Enter PAN Number'
                            }
                            required
                          />
                        </div>
                      )}
                      <input
                        className='form-control input-width-set fs-14 mx-auto mb-2'
                        type="date"
                        placeholder='Date'
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />

                      <div className="d-flex justify-content-center gap-3 mx-3 mt-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn btn-secondary w-25 fs-14 mb-3"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className='btn btn-danger fs-14 w-50 mb-3'
                          disabled={!formData.address || !formData.pin || !formData.city || !formData.state || !selectedId || !formData.idNumber || !formData.date}
                        >
                          Submit
                        </button>
                      </div>
                      <p className='fs-14'>*Only Indian nationals can donate on this platform.</p>
                    </form>
                  </div>
                )}
                {activeBtn === 'Regular' && step === 3 && (
                  <div className='py-lg-3 py-3'>
                    <div className="row m-0 pt-lg-4 mb-3">
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-start mb-3"> 
                           <p className='m-0 fs-14 fw-bold'>Bank Account Details</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Account Name</span>: Nurturing Mankind</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Account Type</span>: Current Account</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Account Number</span>: 201016195966</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>IFSC Code</span>: INDB001809</p>
                           <p className='fs-14 m-0'><span className='fw-bold'>Bank Branch</span>: Sector 31, Noida</p>
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-sm-end text-start mb-3"> 
                           <img className='img-fluid' src="/assets/img/payment.jpeg" />
                       </div>
                    </div>
                    <button
                      onClick={() => {
                        setStep(1);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          address: '',
                          pin: '',
                          city: '',
                          state: '',
                          idNumber: '',
                          idType: '',
                          date: '',
                          amount: '',
                          donationType: 'Regular'
                        });
                        setSelectedAmount(null);
                        setSelectedId('');
                        setPlanType('monthly');
                      }}
                      className="btn btn-primary fs-14"
                    >
                      Back
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;