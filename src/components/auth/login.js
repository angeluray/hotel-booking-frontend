import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/login/login';

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

  if (isLoggedIn) {
    navigate('/', { replace: true });
  }

  if (error) {
    document.querySelector('#login-error').classList.remove('hidden');
  }

  return (
    <div className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-end p-9 w-sm-3/4"
      >
        <img className="self-center w-4/12 w-sm-6/12" src="logo.png" alt="" />
        <h2 className="w-full text-center text-3xl">Login</h2>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            autoComplete="off"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <p id="login-error" className="w-full text-red-600 hidden">
          Please enter a valid name or password
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 appearance-none border rounded px-3 leading-tight focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
