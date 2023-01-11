import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reducers/reservationsReducers';
import cityReducer from './reducers/citiesReducers';
import room_typeReducer from './reducers/room_typesReducers';
import hotelReducer from './reducers/hotelReducers';

const rootReducer = combineReducers({
  hotels: hotelReducer,
  cities: cityReducer,
  reservations: reservationReducer,
  room_types: room_typeReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;