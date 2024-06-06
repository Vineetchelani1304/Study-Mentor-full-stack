import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import countryCode from '../../data/countrycode.json';
import apiConnector from '../../services/apiconnector';
import { contactusEndpoint } from '../../services/apis';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors }
  } = useForm();

  async function submitHandler(data) {
    try {
      setLoading(true);
      console.log(data);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = { status: 200, message: data };
      console.log("logging response", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className='w-11/12 mx-auto mt-16 mb-10 text-white'>
      <div className="flex flex-col jus">
        <h1 className='text-3xl text-orange-400 font-bold text-center'>Get In Touch</h1>
        <p className="text-center text-slate-500">We'd love to hear from you, Please fill out this form.</p>
      </div>
      <form className='lg:w-[30%] w-[90%] mx-auto mt-6 mb-6' onSubmit={handleSubmit(submitHandler)}>
        <div className="flex lg:flex-row flex-col gap-4 mx-1">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input type="text"
              id='firstName'
              name='firstName'
              placeholder='Enter your first name'
              {...register('firstName', { required: true })}
              className='mt-2 bg-slate-800 text-white rounded-md p-2 outline-slate-400'
            />
            {errors.firstName && (
              <span className='text-red-500'>Enter your first name</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input type="text"
              id='lastName'
              name='lastName'
              placeholder='Enter your last name'
              {...register('lastName', { required: true })}
              className='mt-2 bg-slate-800 text-white rounded-md p-2 outline-slate-400'
            />
            {errors.lastName && (
              <span className='text-red-500'>Enter your last name</span>
            )}
          </div>
        </div>
        <div className="flex flex-col mx-1 mt-8">
          <label htmlFor="email">Email</label>
          <input type="email"
            id='email'
            name='email'
            placeholder='Enter your email'
            {...register('email', { required: true })}
            className='bg-slate-800 mt-2 text-white rounded-md p-2 outline-slate-400'
          />
          {errors.email && (
            <span className='text-red-500'>Enter your email</span>
          )}
        </div>
        <div className='mt-8 mx-1 gap-4'>
          <label htmlFor="contactNo.">Phone Number</label>
          <div id='contactNo.' className='flex flex-row lg:gap-4 gap-2 mt-2'>
            <select name="dropbox" id="dropbox" {...register("dropbox", { required: true })} className='bg-slate-800 lg:w-[12%] w-[25%] text-slate-400 flex justify-center items-center rounded-md'>
              {countryCode.map((code, index) => (
                <option key={index} value={code.code}>
                  {code.code} - {code.country}
                </option>
              ))}
            </select>
            <input type='number' name='phoneNo.' id='phoneNo' placeholder='1234567890' className='w-[90%] bg-slate-800 rounded-md p-2 text-white'
              {...register("phoneNo", { required: true, maxLength: 10, minLength: 9 })}
            />
          </div>
          {errors.phoneNo && (
            <span className='text-red-500'>Enter a valid phone number</span>
          )}
        </div>
        <div className='mx-1 mt-8 gap-4'>
          <label htmlFor="text">Comment</label>
          <textarea name="text" id="text" className='w-[100%] mt-2 bg-slate-800 rounded-md text-white p-2 outline-slate-400'
            {...register('text', { required: true })}
          ></textarea>
          {errors.text && (
            <span className='text-red-500'>Enter your comment</span>
          )}
        </div>
        <div className='flex justify-center items-center mt-8 mx-1'>
          <button className='text-black bg-yellow-400 rounded-md font-bold p-2 w-[100%]'>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
