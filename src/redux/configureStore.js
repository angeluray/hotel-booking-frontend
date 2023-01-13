// import { combineReducers, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import reservationReducer from './reducers/reservationsReducers';
// import cityReducer from './reducers/citiesReducers';
// import hotelReducer from './reducers/hotelReducers';
// import loginReducer from './login/login';

import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reservationsReducer from './reservations/reservationsSlice';
import roomTypesReducer from './RoomTypes/roomTypesSlice';
import cityReducer from './city/city';
import hotelReducer from './hotel/hotel';
import loginReducer from './login/login';

const rootReducer = combineReducers({
  hotel: hotelReducer,
  cities: cityReducer,
  reservations: reservationsReducer,
  login: loginReducer,
  type: roomTypesReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default store;
