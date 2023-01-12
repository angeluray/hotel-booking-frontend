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
      dispatch(login(localStorage.getItem(tokenKey)));
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
    <div>
      <form onSubmit={submitHandler}>
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
