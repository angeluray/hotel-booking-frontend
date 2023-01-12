const loginURL = 'http://127.0.0.1:3000/auth/login';

const getTokenAsync = async (loginData) => {
  const response = await fetch(loginURL, {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};

export default getTokenAsync;
