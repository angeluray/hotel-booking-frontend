/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getTokenAsync from './login-helper';
import { isLoggedIn, getRole, getUserId } from '../../modules/auth-module';

const BASE_URL = 'https://hotelator.onrender.com/users';
const initialState = {
  token: '',
  isLoggedIn: false,
  role: 'No Role',
  userId: null,
  loading: false,
  error: '',
};

export const login = createAsyncThunk('login', async (loginData) => getTokenAsync(loginData));

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
    resetState(state) {
      state.token = initialState.token;
      state.role = initialState.role;
      state.isLoggedIn = initialState.isLoggedIn;
      state.userId = initialState.userId;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [login.fulfilled]: (state, { payload }) => {
      if (payload.token) {
        state.token = payload.token;
        state.role = getRole(payload.token);
        state.isLoggedIn = isLoggedIn(payload.token);
        state.userId = getUserId(payload.token);
        state.loading = false;
        localStorage.setItem('token', JSON.stringify(payload.token));
      } else {
        state.error = payload.error;
      }
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const loginActions = loginSlice.actions;
export const registerUser = (userInfo) => async () => {
  await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
};

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
