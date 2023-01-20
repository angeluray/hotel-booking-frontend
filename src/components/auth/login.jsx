/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { login } from '../../redux/login/loginReducer';
import LoginBackButton from '../backButton/LoginBackButton';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    dispatch(login(loginData));
  };

  const { isLoggedIn, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn]);

  if (error) {
    document.querySelector('#login-error').classList.remove('hidden');
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
      <LoginBackButton />
      <form
        onSubmit={submitHandler}
        className="w-sm-3/4 flex flex-col gap-2 p-9"
      >
        <div className="w-full flex justify-center">
          <div className="w-7/12 sm:w-6/12 md:w-5/12 self-center px-5">
            <img
              className="self-center"
              src="/static/logo.png"
              alt="Hotelator Logo"
              onClick={() => navigate('/')}
            />
          </div>
        </div>
        <h2 className="w-full text-center font-Taxicab text-3xl capitalize text-gray-800">
          Login
        </h2>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            autoComplete="off"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            autoComplete="off"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            required
          />
        </div>
        <p id="login-error" className="hidden w-full text-red-600">
          Please enter a valid name or password
        </p>
        <button
          type="submit"
          className="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight bg-lime-400 text-slate-50 hover:bg-blue-500 focus:outline-none self-end"
        >
          Login
        </button>
        <p className="text-center text-gray-800 pt-6">
          Don&apos;t have an account?&nbsp;
          <NavLink
            to="/register"
            className="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight bg-lime-400 text-slate-50 hover:bg-blue-500 focus:outline-none self-end"
          >
            Sign up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
