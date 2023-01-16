/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const citiesURL = 'https://hotelator.onrender.com/api/v1/cities';

const getAllCities = createAsyncThunk('cities', async () => {
  const response = await fetch(citiesURL);
  const data = await response.json();
  return data;
});

const citySlice = createSlice({
  name: 'city',
  initialState: {
    loading: 'pending',
    all: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCities.pending, (state) => {
        state.loading = 'loading';
      })

      .addCase(getAllCities.fulfilled, (state, action) => {
        state.loading = 'completed';
        state.all = action.payload;
      })

      .addCase(getAllCities.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export const cityActions = citySlice.actions;
export { getAllCities };

export default citySlice.reducer;
