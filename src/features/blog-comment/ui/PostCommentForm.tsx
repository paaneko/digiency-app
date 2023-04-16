'use client';

/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import LoadingAnimation from '@shared/ui/loading';

type PostCommentInputType = {
  _id: string;
  name: string;
  email: string;
  body: string;
};

type PostCommentFormType = {
  postId: string;
};

function PostCommentForm({ postId }: PostCommentFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostCommentInputType>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [notSubmitted, setNotSubmitted] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<PostCommentInputType> = async (data) => {
    setShowLoading(true);
    await fetch('/api/createComment', {
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

  if (submitted) {
    return (
      <div className="p-10 text-white bg-orange-main">
        <div className="font-semibold text-2xl text-center">Thank you for commenting the post!</div>
        <p className="font-medium mt-2 text-center">Once it has been approved it will appear below</p>
        <div className="flex justify-center">
          <button type="button" onClick={showCommentForm} className="cursor-pointer font-medium mt-2 underline">
            Write one more
          </button>
        </div>
      </div>
    );
  }
  if (notSubmitted) {
    return (
      <div className="p-10 text-white bg-orange-main">
        <div className="font-semibold text-2xl text-center">The comment is not submitted</div>
        <p className="font-medium mt-2 text-center">Please try later</p>
        <div className="flex justify-center">
          <button type="button" onClick={showCommentForm} className="cursor-pointer font-medium mt-2 underline">
            Write one more
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className={`flex-col mt-10 ${blurClass}`}>
        <div className="flex justify-between">
          {/* TODO set current post id of current page */}
          <input {...register('_id')} type="hidden" name="_id" value={postId} />
          <input
            {...register('name', { required: true })}
            className="w-full mr-2.5 h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Name"
          />
          <input
            {...register('email', { required: true })}
            className="w-full h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Email"
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
          {errors.body && <p className="text-error-red font-medium">- Field Send Message is required</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-main py-3 px-6 rounded-md text-white text-lg text-center bg-orange-main focus:shadow-outline focus:outline-none"
        >
          Submit
        </button>
      </form>

      {showLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingAnimation />
        </div>
      )}
    </div>
  );
}

export default PostCommentForm;
