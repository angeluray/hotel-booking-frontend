/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  registerThunk,
  resetCreation,
} from '../../redux/register/registerSlice';
import LoginBackButton from '../backButton/LoginBackButton';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerThunk(form));
  };

  const registerStatus = useSelector((store) => store.register.userCreation);

  useEffect(() => {
    if (registerStatus === 'fulfilled') {
      setForm({
        name: '',
        username: '',
        email: '',
        password: '',
      });

      setTimeout(() => {
        dispatch(resetCreation());
        navigate('/login', { replace: true });
      }, 3000);
    }
  }, [registerStatus]);

  if (registerStatus === 'fulfilled') {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-100">
        <section className="rounded-md border py-2 px-4">
          <h4 className="font-Taxicab text-3xl">Registration successfull!</h4>
          <p className="mt-4">You are going to be redirected to Login Screen</p>
        </section>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
      <LoginBackButton />
      <form
        onSubmit={handleSubmit}
        className="w-sm-3/4 flex flex-col gap-2 p-9"
      >
        <header className="flex w-full justify-center">
          <div className="w-7/12 self-center px-5 sm:w-6/12 md:w-5/12">
            <img
              className="self-center"
              src="/static/logo.png"
              alt=""
              onClick={() => navigate('/')}
            />
          </div>
        </header>

        <h2 className="w-full text-center font-Taxicab text-3xl capitalize text-gray-800">
          Sign up
        </h2>

        <div className="w-full">
          <label htmlFor="name">Full Name</label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            name="name"
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="username">Username</label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            name="username"
            id="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter a username"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            name="email"
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="name">Password</label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            name="password"
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm" htmlFor="show-password">
            Show password?
          </label>
          <input
            className="hover:ring-1"
            type="checkbox"
            name="show-password"
            id="show-password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>

        <button
          className="flex items-center self-end rounded-md bg-lime-400 py-1 px-2 font-bold text-slate-50 hover:bg-blue-500 "
          type="submit"
        >
          <div className="ml-5 grow">Sign Up</div>
          <svg
            className={`${
              registerStatus === 'pending' ? 'text-white' : 'text-transparent'
            } h-5 w-5 animate-spin`}
            xmlns="http:www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </button>

        {registerStatus === 'rejected' && (
          <div className="rounded-md bg-red-300 px-2 py-1 text-sm italic text-red-600">
            Username not available
            <br />
            Please try a different username
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
