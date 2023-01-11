import axios from 'axios';

// constant
const DISPLAY_RESERVATION = 'DISPLAY_RESERVATION';

// Action creator for display greeting
const displayReservation = (payload) => ({
  type: DISPLAY_RESERVATION,
  payload,
});

// get (load) greetings from API
export const fetchReservationAPI = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/users/1/reservations');
  const reservation = response.data;
  dispatch(displayReservation(reservation));
};

// initial states
const initialState = [];

// Reducer for greeting
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_RESERVATION:
      return action.payload;
    default:
      return state;
  }
};

export default reservationReducer;
