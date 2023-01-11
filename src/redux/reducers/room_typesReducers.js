import axios from 'axios';

// constant
const DISPLAY_ROOM_TYPE = 'DISPLAY_ROOM_TYPE';

// Action creator for display greeting
const displayRoomType = (payload) => ({
  type: DISPLAY_ROOM_TYPE,
  payload,
});

// get (load) greetings from API
export const fetchRoom_TypeAPI = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/room_types');
  const room_type = response.data;
  dispatch(displayRoomType(room_type));
};

// initial states
const initialState = [];

// Reducer for greeting
const room_typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROOM_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default room_typeReducer;