import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// The following line will be added because of linter errors but remember to remove it or fixit.
// eslint-disable-next-line react/prop-types
const LogedUsers = ({ logged }) => {
  if (!logged) return <Navigate to="login" />;
  return <Outlet />;
};

export default LogedUsers;
