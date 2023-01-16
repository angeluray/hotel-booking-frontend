/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllCitiesAsyc from './cityHelper';

const initialState = {
  all: [],
  loading: false,
  error: '',
};

export const getAllCities = createAsyncThunk('cities', async () => getAllCitiesAsyc());

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.all = action.payload;
    },
  },
  extraReducers: {
    [getAllCities.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getAllCities.fulfilled]: (state, { payload }) => {
      state.all = payload;
    },
    [getAllCities.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const cityActions = citySlice.actions;

export default citySlice.reducer;
