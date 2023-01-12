/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getTokenAsync from './login-helper';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/users';
const initialState = {
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const registerUser = (userInfo) => async () => {
  await fetch(`${BASE_URL}create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
};

export const { login } = loginSlice.actions;

export const getToken = (loginData) => async (dispatch) => {
  const data = await getTokenAsync(loginData);

  if (data.auth) {
    localStorage.setItem('token', JSON.stringify(data.token));
    dispatch(login(data.token));
  } else {
    localStorage.setItem('token', '');
    dispatch(login(''));
  }
};

export default loginSlice.reducer;
