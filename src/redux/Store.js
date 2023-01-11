import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reservationReducer from './reducers/reservationsReducers';
import cityReducer from './reducers/citiesReducers';
import roomTypeReducer from './reducers/roomTypesReducers';
import hotelReducer from './reducers/hotelReducers';

const rootReducer = combineReducers({
  hotels: hotelReducer,
  cities: cityReducer,
  reservations: reservationReducer,
  room_types: roomTypeReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk));

export default store;
