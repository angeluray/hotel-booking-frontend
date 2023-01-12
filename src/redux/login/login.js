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
      state.token = action.payload;
    },
  },
});

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
