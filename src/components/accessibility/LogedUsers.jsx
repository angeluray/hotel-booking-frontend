/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const LogedUsers = ({ logged }) => {
  if (!logged) return <Navigate to="login" />;
  return <Outlet />;
};

export default LogedUsers;
