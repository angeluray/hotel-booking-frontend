import axios from 'axios';

// constant
const DISPLAY_CITY = 'DISPLAY_CITY';

// Action creator for display greeting
const displayCity = (payload) => ({
  type: DISPLAY_CITY,
  payload,
});

// get (load) greetings from API
export const fetchCityAPI = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/cities');
  const city = response.data;
  dispatch(displayCity(city));
};

// initial states
const initialState = [];

// Reducer for greeting
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CITY:
      return action.payload;
    default:
      return state;
  }
};

export default cityReducer;
