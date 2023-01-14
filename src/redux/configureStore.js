// import { combineReducers, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import reservationReducer from './reducers/reservationsReducers';
// import cityReducer from './reducers/citiesReducers';
// import hotelReducer from './reducers/hotelReducers';
// import loginReducer from './login/login';

import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reservationsReducer from './reservations/reservationsSlice';
import roomTypesReducer from './RoomTypes/roomTypesSlice';
import cityReducer from './city/cityReducer';
import hotelReducer from './hotel/hotel';
import loginReducer from './login/login';

const store = configureStore(
  {
    reducer: {
      hotel: hotelReducer,
      reservations: reservationsReducer,
      login: loginReducer,
      type: roomTypesReducer,
      cities: cityReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
