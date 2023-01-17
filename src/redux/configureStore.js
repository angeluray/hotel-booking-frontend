import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reservationsReducer } from './reservations/reservationsSlice';
import cityReducer from './city/cityReducer';
import hotelReducer from './hotel/hotel';
import loginReducer from './login/loginReducer';
import { detailsReducer } from './details/detailsReducer';
import registerReducer from './register/registerSlice';
import roomTypesReducer from './RoomTypes/roomTypesSlice';

const rootReducer = combineReducers({
  hotel: hotelReducer,
  city: cityReducer,
  login: loginReducer,
  details: detailsReducer,
  register: registerReducer,
  reservations: reservationsReducer,
  roomTypes: roomTypesReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  // eslint-disable-next-line comma-dangle
  applyMiddleware(thunk)
);

export default store;
