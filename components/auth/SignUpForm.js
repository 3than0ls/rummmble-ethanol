import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField';

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('signing in', data);
  };

  return (
    <div className="relative bg-gradient-to-b from-green-600 via-green-400 to-yellow-200 flex flex-row-reverse justify-between text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-16 w-7/12 py-56 pl-16 flex flex-col justify-center items-center bg-white rounded-l-full"
      >
        <div className="flex flex-col py-10 mb-8">
          <h1 className="font-bold tracking-wide text-5xl text-gray-800 text-center">Create an account</h1>
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
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          register={register({
            required: {
              value: true,
              message: 'Password is required',
            },
            validate: (value) => value === register.password,
          })}
          errors={errors}
        />
        <button
          type="submit"
          className="w-1/4 justify-center bg-blue-800 hover:bg-blue-900 focus:outline-none text-white my-6 py-2 rounded-full"
        >
          Create Account
        </button>
      </form>

      <div className="w-1/3 h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="font-bold text-4xl">rummmble</h1>
        <p className="text-2xl m-4">Already have an account? Log in!</p>
        <a
          href="/login"
          className="w-1/3 text-xl bg-black bg-opacity-0 hover:bg-opacity-25 font-semibold py-2 px-4 border-2 border-white hover:border-transparent rounded-full focus:outline-none"
        >
          Log In
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
