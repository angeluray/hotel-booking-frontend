import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayFullCities from './components/cities/cities';
import Navigation from './components/navigations/humburger';
import configureStore from './redux/configureStore';
import Login from './components/auth/login';

function App() {
  return (
    <Provider store={configureStore}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<DisplayFullCities />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
