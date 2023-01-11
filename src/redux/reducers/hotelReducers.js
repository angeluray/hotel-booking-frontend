import axios from 'axios';

// constant
const DISPLAY_HOTEL = 'DISPLAY_HOTEL';

// Action creator for display greeting
const displayHotel = (payload) => ({
  type: DISPLAY_HOTEL,
  payload,
});

// get (load) greetings from API
export const fetchHotelAPI = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/hotels');
  const hotel = response.data;
  dispatch(displayHotel(hotel));
};

// initial states
const initialState = [];

// Reducer for greeting
const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_HOTEL:
      return action.payload;
    default:
      return state;
  }
};

export default hotelReducer;
