/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getTokenAsync from './login-helper';

const initialState = {
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { login } = loginSlice.actions;

export const getToken = (loginData) => async (dispatch) => {
  const data = await getTokenAsync(loginData);
  dispatch(login(data));
  if (data.auth) {
    localStorage.setItem('token', JSON.stringify(data.token));
  } else {
    localStorage.setItem('token', '');
  }
};

export default loginSlice.reducer;
