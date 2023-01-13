import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../redux/login/login';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enteredName, setName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmationPassword, setEnteredConfirmationPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(registerUser());
  }, [dispatch]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const confirmationPasswordChangeHandler = (event) => {
    setEnteredConfirmationPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setError(null);
    const userData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      confirmation_Password: enteredConfirmationPassword,
    };

    dispatch(registerUser(userData));
    navigate('/Login');
  };

  return (
    <div className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-end p-9 w-sm-3/4"
      >
        <div className="form-group">
          <label>Full Name</label>
          <input
            placeholder="username"
            className="form-control mx-2"
            type="name"
            value={enteredName}
            onChange={nameChangeHandler}
            autoComplete="off"
          />
        </div>
        <div className="form-group ">
          <label>Email</label>
          <input
            placeholder="email"
            className="form-control mx-2"
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            autoComplete="off"
          />
        </div>
        <div className="form-group ">
          <label>Password</label>
          <input
            placeholder="password"
            className="form-control mx-2"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            autoComplete="off"
          />
        </div>
        <div className="form-group ">
          <label>confirmation_Password</label>
          <input
            placeholder="confirmation_Password"
            className="form-control mx-2"
            type="password"
            value={enteredConfirmationPassword}
            onChange={confirmationPasswordChangeHandler}
            autoComplete="off"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white">
          SignUp
        </button>
        {
            error && <div className="alert alert-danger">{error.message}</div>
          }
      </form>
      <div className="links">
        <h3>Do you have an account?</h3>
        <p>Just Login!</p>
        <Link to="/Login">Login</Link>
      </div>
    </div>

  );
};

export default Register;
