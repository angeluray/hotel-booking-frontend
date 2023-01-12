const loginURL = 'http://127.0.0.1:3000/api/v1/login';

const getTokenAsync = async () => {
  const response = await fetch(loginURL);
  const data = await response.json();
  return data;
};

export default getTokenAsync;
