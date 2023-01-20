/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllHotelsAsync, {
  deleteHotel,
  getHotelsByCity,
  postHotelAsync,
} from './hotelHelper';

const initialState = {
  all: [],
  loading: false,
  deleteStatus: '',
  addStatus: '',
  error: '',
  hotelsByCity: [],
};

export const getAllHotels = createAsyncThunk('hotels', async () => getAllHotelsAsync());
export const addHotel = createAsyncThunk(
  'add-hotel',
  async ({ token, hotel, goToHome }) => {
    await postHotelAsync(token, hotel);
    goToHome();
  },
);

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.all = action.payload;
    },
    resetDeleteStatus: (state) => {
      state.deleteStatus = '';
    },
  },
  extraReducers: {
    [getAllHotels.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getAllHotels.fulfilled]: (state, { payload }) => {
      state.all = payload;
    },
    [getAllHotels.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addHotel.pending]: (state) => {
      state.addStatus = 'pending';
    },
    [addHotel.fulfilled]: (state, { payload }) => {
      state.addStatus = 'fulfilled';
      state.all.push(payload);
    },
    [addHotel.rejected]: (state) => {
      state.addStatus = 'rejected';
    },
    [deleteHotel.rejected]: (state) => {
      state.deleteStatus = 'rejected';
    },
    [deleteHotel.pending]: (state) => {
      state.deleteStatus = 'pending';
    },
    [deleteHotel.fulfilled]: (state, action) => ({
      ...state,
      deleteStatus: 'fulfilled',
      all: state.all.filter((hotel) => hotel.id !== action.meta.arg.id),
    }),
    [getHotelsByCity.fulfilled]: (state, action) => {
      state.hotelsByCity = action.payload;
    },
  },
});

export const hotelActions = hotelSlice.actions;

export const { resetDeleteStatus } = hotelSlice.actions;

export default hotelSlice.reducer;
