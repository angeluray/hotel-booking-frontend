import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  getRoomStatus: '',
  types: [],
};

export const getRoomTypes = createAsyncThunk('getRoomTypes', async (token) => {
  const url = 'https://hotelator.onrender.com/api/v1/roomTypes';
  const response = await fetch(url, {
    method: 'GET',
    headers: { Authorization: token },
  });
  return response.json();
});

const roomTypesSlice = createSlice({
  name: 'roomTypes',
  initialState,
  reducers: {
    /* eslint no-param-reassign: "error" */
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
