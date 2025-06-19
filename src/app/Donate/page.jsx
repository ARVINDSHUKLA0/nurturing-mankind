'use client';

import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import '../Donate/Donate.css';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser'; 

const Page = () => {
  const [step, setStep] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pin: '',
    state: '',
    idNumber: '',
    date: '',
    amount: '',
    donationType: 'one-time'
  });
  const [panError, setPanError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // PAN number validation
    if (name === 'idNumber') {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (value && !panRegex.test(value.toUpperCase())) {
        setPanError('Please enter a valid PAN number (e.g., ABCDE1234F)');
      } else {
        setPanError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check PAN validation before submitting
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(formData.idNumber.toUpperCase())) {
      setPanError('Please enter a valid PAN number');
      return;
    }

    let formattedAmount = selectedAmount;
    if (typeof selectedAmount === 'string') {
      formattedAmount = selectedAmount.replace(/[^0-9]/g, '');
    }

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      pin: formData.pin,
      state: formData.state,
      type: 'One-time Donation',
      frequency: 'One-time',
      amount: formattedAmount || 'Custom amount',
      idType: 'PAN',
      idNumber: formData.idNumber.toUpperCase(),
      date: formData.date,
      donationType: 'one-time'
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
                {step === 1 && (
                  <div>
                    <div className='d-flex justify-content-center align-items-center gap-3 my-3'>
                      <div><i className="fa-solid fa-gift"></i></div>
                      <p className='m-0 fs-14'>Choose an amount to donate</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-3 mb-3'>
                      <button
                        type="button"
                        className={`btn px-4 fs-14 ${selectedAmount === '20000' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedAmount('20000')}
                      >
                        700
                      </button>
                      <button
                        type="button"
                        className={`btn px-3 fs-14 ${selectedAmount === '40000' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedAmount('40000')}
                      >
                        1200
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
                        Other
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
                      <div><i className="fa-solid fa-temperature-arrow-up"></i></div>
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

                {step === 2 && (
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
                        placeholder='State'
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control input-width-set mx-auto"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleInputChange}
                          placeholder="Enter PAN Number (e.g., ABCDE1234F)"
                          required
                          maxLength={10}
                          onInput={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                          }}
                        />
                        {panError && <div className="text-danger small mt-1">{panError}</div>}
                      </div>
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
                          disabled={!formData.address || !formData.pin || !formData.state || !formData.idNumber || !formData.date || panError}
                        >
                          Submit
                        </button>
                      </div>
                      <p className='fs-14'>*Only Indian nationals can donate on this platform.</p>
                    </form>
                  </div>
                )}
                {step === 3 && (
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
                        <img className='img-fluid' src="/assets/img/payment.jpeg" alt="Payment QR Code" />
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
                          state: '',
                          idNumber: '',
                          date: '',
                          amount: '',
                          donationType: 'one-time'
                        });
                        setSelectedAmount(null);
                        setPanError('');
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