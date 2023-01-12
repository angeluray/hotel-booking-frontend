/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getTokenAsync from './login-helper';
import { getRole, isLoggedIn, getUserId } from '../../modules/auth-module';

const initialState = {
  token: '',
  isLoggedIn: false,
  role: 'No Role',
  userId: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.role = getRole(action.payload);
      state.isLoggedIn = isLoggedIn(action.payload);
      state.userId = getUserId(action.payload);
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
