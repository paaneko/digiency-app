'use client';

/* eslint-disable react/jsx-props-no-spreading */
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import LoadingAnimation from '@shared/ui/loading';
import ContactUsFormInputType from '@features/contact-us/model/types';

export function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormInputType>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [notSubmitted, setNotSubmitted] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactUsFormInputType> = async (data) => {
    setShowLoading(true);
    await fetch('/api/createContactUs', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setShowLoading(false);
        setSubmitted(true);
      })
      .catch(() => {
        setShowLoading(false);
        setNotSubmitted(true);
      });
  };
  const showCommentForm = (): void => {
    setSubmitted(false);
    setNotSubmitted(false);
  };

  const blurClass = showLoading ? 'blur-sm' : null;

  return (
    <div className="flex justify-between items-center">
      <div className="relative md:w-[400px] md:h-[200px] xl:w-[590px] xl:h-[400px]">
        <Image
          className="inline-flex object-cover object-center"
          fill
          src="contact-us-form.svg"
          alt="contact-us-form-image"
        />
      </div>
      <div className="relative">
        {!submitted && !notSubmitted && (
          <>
            <div className="text-2xl text-center md:mt-4 md:mb-2 font-semibold xl:text-4xl">
              Send Your <span className="text-orange-main">Message To Us</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`${blurClass}`}>
              <div className="flex-col inline-flex mt-5">
                <div className="flex justify-between">
                  <input
                    {...register('name', { required: true })}
                    className=" mr-2.5 w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    {...register('email', { required: true })}
                    className="w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex justify-between mt-5">
                  <input
                    {...register('mobile', { required: true })}
                    className=" mr-2.5 w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                    type="tel"
                    placeholder="Mobile No"
                  />
                  <input
                    {...register('subject', { required: true })}
                    className="w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <textarea
                  {...register('body', { required: true })}
                  className="resize-none mt-7 h-[163px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                  placeholder="Send Message"
                />
                <div className="flex flex-col p-5">
                  {errors.name && <p className="text-error-red font-medium">- Field Name is required</p>}
                  {errors.email && <p className="text-error-red font-medium">- Field Email is required</p>}
                  {errors.mobile && <p className="text-error-red font-medium">- Field Mobile No is required</p>}
                  {errors.subject && <p className="text-error-red font-medium">- Field Subject is required</p>}
                  {errors.body && <p className="text-error-red font-medium">- Field Send Message is required</p>}
                </div>
                <button
                  type="submit"
                  className="bg-orange-main py-3 px-6 rounded-md text-white text-lg text-center bg-orange-main focus:shadow-outline focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
        {submitted && (
          <div className="py-32 p-12 text-white bg-orange-main">
            <div className="font-semibold text-2xl text-center">Request successfully accepted</div>
            <p className="font-medium mt-2 text-center">We will be in touch with you shortly</p>
          </div>
        )}
        {notSubmitted && (
          <div className="py-32 p-12 text-white bg-orange-main">
            <div className="font-semibold text-2xl text-center">An error occurred while sending the request</div>
            <p className="font-medium mt-2 text-center">Please try later or click below</p>
            <div className="flex justify-center">
              <button type="button" onClick={showCommentForm} className="cursor-pointer font-medium mt-2 underline">
                Try again
              </button>
            </div>
          </div>
        )}
        {showLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingAnimation />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactUsForm;
