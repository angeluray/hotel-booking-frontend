import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  getRoomStatus: '',
  types: [],
};

export const getRoomTypes = createAsyncThunk('getRoomTypes', async (token) => {
  const url = 'http://localhost:3000/api/v1/roomTypes'; // Real API URL will be here (not localhost)
  const response = await fetch(url, {
    method: 'GET',
    headers: { Authorization: token },
  });
  return response.json();
});

/* eslint no-param-reassign: "error" */
const roomTypesSlice = createSlice({
  name: 'roomTypes',
  initialState,
  reducers: {
    resetGetRoomTypesStatus(state) {
      state.getRoomStatus = '';
    },
  },
  extraReducers: {
    [getRoomTypes.pending]: (state) => {
      state.getRoomStatus = 'pending';
    },
    [getRoomTypes.rejected]: (state) => {
      state.getRoomStatus = 'rejected';
    },
    [getRoomTypes.fulfilled]: (state, action) => {
      state.getRoomStatus = 'fulfilled';
      state.types = action.payload;
    },
  },
});

export default roomTypesSlice.reducer;

export const { resetGetRoomTypesStatus } = roomTypesSlice.actions;
