import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayFullCities from './components/cities/cities';
import Navigation from './components/navigations/humburger';
import configureStore from './redux/configureStore';
import Login from './components/auth/login';
import Signup from './components/auth/register';
import Reserve from './components/reservations/Reserve';
import DetailsForm from './components/Details/detailsForm';
import FormHotel from './components/add/form';

function App() {
  return (
    <Provider store={configureStore}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<DisplayFullCities />} />
          <Route path="/login" element={<Login />} />
          <Route path=":roomId" element={<DetailsForm />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/add" element={<FormHotel />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
