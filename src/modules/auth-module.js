const decodeToken = (token) => {
  const jwtData = token.split('.')[1];
  const decodedJwtJsonData = window.atob(jwtData);
  return JSON.parse(decodedJwtJsonData);
};

const isLoggedIn = (token) => {
  if (token !== '') {
    const decodedJwtData = decodeToken(token);
    const expirationDateInMills = decodedJwtData.exp * 1000;
    const todayDateInMills = new Date().getTime();
    if (expirationDateInMills >= todayDateInMills) return true;
  }
  return false;
};

const isLoggedOut = (token) => !isLoggedIn(token);

const getRole = (token) => {
  if (token !== '') {
    const decodedJwtData = decodeToken(token);
    return decodedJwtData.role;
  }
  return 'No Role';
};

const getUserId = (token) => {
  if (token !== '') {
    const decodedJwtData = decodeToken(token);
    return decodedJwtData.user_id;
  }
  return null;
};

const logout = () => {
  localStorage.removeItem('token');
};

export {
  isLoggedIn, isLoggedOut, getRole, getUserId, logout,
};
