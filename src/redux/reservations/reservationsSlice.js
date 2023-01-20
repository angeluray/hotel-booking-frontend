import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserReservations = createAsyncThunk(
  'reservations/fetchUserReservations',
  async (stateData) => {
    const response = await fetch(
      `https://hotelator.onrender.com/api/v1/users/${stateData.userId}/reservations`,
      {
        headers: {
          Authorization: stateData.token,
        },
      },
    );
    const data = await response.json();
    return data;
  },
);

export const createReservation = createAsyncThunk(
  'createReservation',
  async ({ token, reservationData }) => {
    const response = await fetch(
      `https://hotelator.onrender.com/api/v1/users/${reservationData.user_id}/reservations`,
      {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      },
    );
    return response.json();
  },
);

const initialState = {
  reservations: [],
  loading: false,
  rejected: false,
  createReservationStatus: '',
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    resetCreateReservationStatus(state) {
      state.createReservationStatus = '';
    },
  },
  extraReducers: {
    [fetchUserReservations.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserReservations.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.reservations = payload;
    },
    [fetchUserReservations.rejected]: (state) => {
      state.loading = false;
      state.rejected = true;
    },
    [createReservation.pending]: (state) => {
      state.createReservationStatus = 'pending';
    },
    [createReservation.fulfilled]: (state) => {
      state.createReservationStatus = 'fulfilled';
    },
    [createReservation.rejected]: (state) => {
      state.createReservationStatus = 'rejected';
    },
  },
});

export const reservationsReducer = reservationsSlice.reducer;

export const { resetCreateReservationStatus } = reservationsSlice.actions;
