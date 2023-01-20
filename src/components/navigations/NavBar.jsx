import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from '../../modules/auth-module';
import { loginActions } from '../../redux/login/loginReducer';

function NavBar() {
  const { isLoggedIn: loggedIn, role } = useSelector((state) => state.login);
  const [loggedOut, setLoggedOut] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logout();
    dispatch(loginActions.resetState());
    setMenuVisible(!menuVisible);
    setLoggedOut(true);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    setMenuVisible(false);
  }, []);

  useEffect(() => {
    if (loggedOut) {
      navigate('/', { replace: true });
    }
  }, [loggedOut]);

  return (
    <>
      <button
        type='button'
        onClick={() => setMenuVisible(!menuVisible)}
        className='absolute top-2 left-2 z-20 rounded-md border-2 p-1 md:hidden'
      >
        {menuVisible ? (
          <CloseIcon className='h-4 w-4' />
        ) : (
          <MenuIcon className='h-4 w-4' />
        )}
      </button>
      <nav
        className={`${
          menuVisible ? 'flex' : 'hidden'
        } absolute top-0 left-0 z-10 h-screen w-3/5 flex-col items-center justify-evenly overflow-hidden border-r bg-white py-4 pl-2 md:static md:flex md:w-1/5`}
      >
        <Link
          onClick={() => setMenuVisible(false)}
          className='px-4 md:px-6 lg:px-8'
          to='/'
        >
          <img src='/static/logo.png' alt='Hotelator Logo' />
        </Link>
        <div className='flex w-full flex-col pl-2 pt-12 text-gray-600'>
          {role !== 'Admin' && loggedIn && (
            <>
              <NavLink
                to='/add-hotel'
                onClick={() => setMenuVisible(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-lime-400 text-slate-50' : ''
                  } py-2 pl-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50`
                }
              >
                ADD HOTEL
              </NavLink>
              <NavLink
                to='/delete-hotel'
                onClick={() => setMenuVisible(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-lime-400 text-slate-50' : ''
                  } py-2 pl-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50`
                }
              >
                DELETE HOTEL
              </NavLink>
            </>
          )}
          {!loggedIn && (
            <>
              <NavLink
                to='/login'
                onClick={() => setMenuVisible(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-lime-400'
                    : '' +
                      'mt-8 py-2 font-Taxicab text-xl font-bold hover:bg-lime-400 hover:text-slate-50'
                }
              >
                LOG IN
              </NavLink>
              <NavLink
                to='/register'
                onClick={() => setMenuVisible(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-lime-400 text-slate-50'
                    : '' +
                      'py-2 font-Taxicab text-xl font-bold hover:bg-lime-400 hover:text-slate-50'
                }
              >
                SIGN UP
              </NavLink>
            </>
          )}
          {loggedIn && (
            <>
              <NavLink
                to='/reserve'
                onClick={() => setMenuVisible(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-lime-400 text-slate-50' : ''
                  } py-2 pl-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50`
                }
              >
                RESERVE
              </NavLink>
              <NavLink
                to='/reservations'
                onClick={() => setMenuVisible(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-lime-400 text-slate-50' : ''
                  } py-2 pl-2 font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50`
                }
              >
                MY RESERVATIONS
              </NavLink>
              <button
                type='button'
                onClick={logoutHandler}
                className='mt-6 py-2 pl-2 text-left font-[Taxicab] text-xl font-bold  hover:bg-lime-400 hover:text-slate-50'
              >
                LOG OUT
              </button>
            </>
          )}
        </div>
        <footer className='mt-auto flex flex-col items-center'>
          <div className='mb-2 flex w-full justify-around'>
            <i className='fa-brands fa-twitter text-gray-600' />
            <i className='fa-brands fa-facebook-f text-gray-600' />
            <i className='fa-brands fa-google-plus-g text-gray-600' />
            <i className='fa-brands fa-vimeo-v text-gray-600' />
            <i className='fa-brands fa-pinterest-p text-gray-600' />
          </div>
          <p className='text-xs text-gray-600'>©2023 Hotelator</p>
        </footer>
      </nav>
    </>
  );
}

export default NavBar;
