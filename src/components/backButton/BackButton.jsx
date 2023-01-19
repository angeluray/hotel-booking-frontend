/* eslint-disable jsx-a11y/no-static-element-interactions */
// Here the rule is desactivated because this button works to capture bubbled events.
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <i
      className="fa-solid fa-caret-left absolute left-0 bottom-4 rounded-r-full bg-lime-400 py-4 px-6 text-slate-50 hover:bg-lime-500 md:hidden"
      onClick={() => navigate(-1)}
    />
  );
};

export default BackButton;
