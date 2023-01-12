import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/login/login';

const tokenKey = 'token';

const Login = () => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  useEffect(() => {
    if (localStorage.getItem(tokenKey)) {
      dispatch(login(JSON.parse(localStorage.getItem(tokenKey))));
    }
  }, [dispatch]);

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

  return (
    <div className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-end p-9 w-sm-3/4"
      >
        <img src="R-logo.png" alt="Hotel Logo" />
        <input
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          autoComplete="off"
        />
        <input
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          autoComplete="off"
        />
        <button type="submit" className="bg-blue-500 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
