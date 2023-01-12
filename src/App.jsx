import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayFullCities from './components/cities/cities';
import Navigation from './components/navigations/humburger';
import configureStore from './redux/configureStore';
import Login from './components/auth/login';
import { loginActions } from './redux/login/login';
import IsAdmin from './components/accessibility/isAdmin';

function App() {
  const navigate = useNavigate();

  const { isLoggedIn, role } = useSelector((state) => state.login);

  useEffect(() => {
    if (localStorage.getItem(tokenKey)) {
      dispatch(loginActions.login(JSON.parse(localStorage.getItem(tokenKey))));
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn]);

  return (
    <Provider store={configureStore}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<DisplayFullCities />} />
          <Route path='/login' element={<Login />} />
          <Route element={<IsAdmin role={role} loggedIn={isLoggedIn} />}>
            <Route element={<LogedUsers logged={isLoggedIn} />}>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
