import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  name: '',
  description: '',
  capacity: '',
  rating: '',
  price: '',
  image: '',
  reserved: false,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getDetailsSuccess: (state, { payload }) => {
      // eslint-disable-next-line no-unused-expressions, no-param-reassign
      state.name = payload.title;
      // eslint-disable-next-line no-param-reassign
      state.description = payload.description;
      // eslint-disable-next-line no-param-reassign
      state.price = payload.price;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getDetailsSuccess } = detailsSlice.actions;

export default detailsSlice.reducer;
