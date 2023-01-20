import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/auth/login';
import AddHotel from './components/hotels/AddHotel';
import { loginActions } from './redux/login/loginReducer';
import LogedUsers from './components/accessibility/LogedUsers';
import DetailsForm from './components/Details/detailsForm';
import IsAdmin from './components/accessibility/isAdmin';
import Reservations from './components/reservations/Reservations';
import RemoveHotel from './components/hotels/removeHotel/RemoveHotel';
import SignUp from './components/auth/register';
import Home from './components/Home';
import Index from './components/Main';
import Reserve from './components/reservations/Reserve';

const App = () => {
  const dispatch = useDispatch();
  const tokenKey = 'token';
  if (localStorage.getItem(tokenKey)) {
    dispatch(loginActions.login(JSON.parse(localStorage.getItem(tokenKey))));
  }

  const { isLoggedIn, role, token } = useSelector((state) => state.login);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Index />} />
          <Route path=":roomId" element={<DetailsForm token={token} />} />
          <Route element={<IsAdmin role={role} loggedIn={isLoggedIn} />}>
            <Route path="add-hotel" element={<AddHotel />} />
            <Route path="delete-hotel" element={<RemoveHotel />} />
          </Route>
          <Route element={<LogedUsers logged={isLoggedIn} />}>
            <Route path="reserve" element={<Reserve token={token} />} />
            <Route path="reservations" element={<Reservations />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
