/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ArrowBack } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginBackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-6 left-6" onClick={() => navigate(-1)}>
      <button className="rounded-full border-4 p-2 text-gray-400 md:p-4 " type="button">
        <ArrowBack />
      </button>
    </div>
  );
};

export default LoginBackButton;
