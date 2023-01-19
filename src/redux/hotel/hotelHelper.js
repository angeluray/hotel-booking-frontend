import { createAsyncThunk } from '@reduxjs/toolkit';

const hotelURL = 'https://hotelator.onrender.com/api/v1/hotels';

const getAllHotelsAsync = async () => {
  const response = await fetch(hotelURL);
  const data = await response.json();
  return data;
};

const postHotelAsync = async (token, formData) => {
  const response = await fetch(hotelURL, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    withCredentials: true,
    body: formData,
  });
  const data = await response.json();
  return data;
};

export const deleteHotel = createAsyncThunk(
  'deleteHotel',
  async ({ id, token }) => {
    const url = `${hotelURL}/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { Authorization: token },
    });
    return response.json();
  },
);

export const getHotelsByCity = createAsyncThunk(
  'getHotelsByCity',
  async ({ token, id }) => {
    const url = `https://hotelator.onrender.com/api/v1/cities/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });
    return response.json();
  },
);

export { postHotelAsync };

export default getAllHotelsAsync;
