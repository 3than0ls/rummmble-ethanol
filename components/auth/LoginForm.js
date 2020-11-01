import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('logging in', data);
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 flex flex-row justify-between text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-16 w-7/12 py-56 pr-16 flex flex-col justify-center items-center bg-white rounded-r-full"
      >
        <div className="flex flex-col py-10 mb-8">
          <h1 className="font-bold tracking-wide text-5xl text-gray-800 text-center">Sign in to Rummmble</h1>
          <p className="text-3xl text-gray-600 text-center">Enter your details below</p>
        </div>
        <InputField
          label="Enter Email"
          type="text"
          name="email"
          register={
            register({
              required: 'Email/username is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid email address',
              },
            })
          }
          errors={errors}
        />
        <InputField
          label="Enter Password"
          name="password"
          type="password"
          register={register({
            required: {
              value: true,
              message: 'Password is required',
            },
          })}
          errors={errors}
        />
        <button type="submit" className="w-1/4 justify-center bg-blue-800 hover:bg-blue-900 focus:outline-none text-white my-6 py-2 rounded-full">Sign In</button>
        <a className="text-gray-500 hover:text-gray-900 underline" href="/">Forgot Password?</a>
      </form>

      <div className="w-1/3 h-screen flex flex-col justify-center items-center text-white">
        <h1 className="font-bold text-4xl">rummmble</h1>
        <p className="text-2xl m-4">Don't have account? Create one!</p>
        <a
          href="/signup"
          className="text-xl w-1/3 bg-black bg-opacity-0 hover:bg-opacity-25 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-full focus:outline-none"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
