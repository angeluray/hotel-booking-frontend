/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userCreation: '',
};

export const registerThunk = createAsyncThunk('register', async (formData) => {
  const url = 'https://hotelator.onrender.com/users';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  return response.json();
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    resetCreation(state) {
      state.userCreation = '';
    },
  },
  extraReducers: {
    [registerThunk.pending]: (state) => {
      state.userCreation = 'pending';
    },
    [registerThunk.fulfilled]: (state) => {
      state.userCreation = 'fulfilled';
    },
    [registerThunk.rejected]: (state) => {
      state.userCreation = 'rejected';
    },
  },
});

export default registerSlice.reducer;

export const { resetCreation } = registerSlice.actions;
