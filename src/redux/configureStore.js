import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reservationReducer from './reducers/reservationsReducers';
import cityReducer from './reducers/citiesReducers';
import hotelReducer from './reducers/hotelReducers';
import loginReducer from './login/login';
import { detailsReducer } from './details/detailsReducer';

const rootReducer = combineReducers({
  hotels: hotelReducer,
  cities: cityReducer,
  reservations: reservationReducer,
  login: loginReducer,
  details: detailsReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk)
);

export default store;
