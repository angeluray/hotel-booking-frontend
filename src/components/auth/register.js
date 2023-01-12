import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/login/login';
// import { fetchUserAPI } from '../../redux/reducers/authReducers';


const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmationPassword, setEnteredConfirmationPassword] = useState('');
  const [error, setError] = useState(null);

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
      confirmationPassword: enteredConfirmationPassword
    };

    dispatch(registerUser(userData));
  };

  return (
    <div className="flex w-screen h-screen bg-gray-200 justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-end p-9 w-sm-3/4"
      >
      <div className="form-group ">
        <label>Full Name</label>
        <input
          className="form-control mx-2"
          type="name"
          value={name}
          onChange={nameChangeHandler}
          autoComplete="off"
          />
      </div>  
      <div className="form-group ">
        <label>Email</label>
        <input
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
          className="form-control mx-2"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          autoComplete="off"
        />
        </div>
      <div className="form-group ">
        <label>Confirmation Password</label>
        <input
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
    </div>
  );
};

export default Register;