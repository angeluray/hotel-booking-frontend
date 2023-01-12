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

export const getMessages = () => async (dispatch) => {
  const token = await getTokenAsync();
  dispatch(login(token));
};

export default loginSlice.reducer;
