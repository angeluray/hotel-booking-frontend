import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const IsAdmin = ({ role, loggedIn }) => {
  if (role !== 'Admin' && !loggedIn) return <Navigate to='/' />;
  return <Outlet />;
};

export default IsAdmin;
