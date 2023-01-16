import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reservationReducer from './reducers/reservationsReducers';
import cityReducer from './city/cityReducer';
import hotelReducer from './reducers/hotelReducers';
import loginReducer from './login/loginReducer';
import { detailsReducer } from './details/detailsReducer';
import registerReducer from './register/registerSlice';

const rootReducer = combineReducers({
  hotel: hotelReducer,
  cities: cityReducer,
  reservations: reservationReducer,
  login: loginReducer,
  details: detailsReducer,
  register: registerReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);
export default store;
