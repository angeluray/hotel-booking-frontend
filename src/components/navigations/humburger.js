import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../media/logo.png';

function Navigation() {
  const myNavLinksEffect = ({ isActive }) => ({
    backgroundColor: isActive ? 'rgb(143, 197, 67)' : 'rgb(248 250 252)',
    color: isActive ? 'rgb(241 245 249)' : 'rgb(51 65 85)',
  });

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  //   const burger = document.getElementById('burger');
  //   const menu = document.getElementById('menu');

  //   burger.addEventListener('click', () => {
  //     if (menu.classList.contains('hidden')) {
  //       menu.classList.remove('hidden');
  //     } else {
  //       menu.classList.add('hidden');
  //     }
  //   })

  return (
    <>
      <div>
        <div className="px-4 cursor-pointer lg:p-2 lg:pl-5" id="burger" onClick={handleToggle} role="button" onKeyUp={handleToggle} tabIndex="-1">
          {navbarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </div>
        <nav className="flex lg:flex-col lg:h-screen bg-slate-50 shadow-md border gap-y-24 navigation absolute top-0 -z-50 lg:w-80" id={`${navbarOpen ? 'showMenu' : 'hide'}`}>
          <div>
            <div className="flex justify-center mt-5" id="menu">
              <img src={logo} className="w-48" alt="Hotelator. logo" />
            </div>
          </div>
          <ul className="showlist flex lg:flex-col lg:w-11/12 lg:self-end lg:text-lg font-sans font-extrabold" id="menu">
            <li className="hover:bg-violet-600">
              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex w-full p-2 gap-x-1"
                to="/"
                end
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                HOTELS
              </NavLink>
            </li>
            <li>

              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex w-full p-2 gap-x-1"
                to="/mylink"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                RESERVE
              </NavLink>
            </li>
            <li>

              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex w-full p-2 gap-x-1"
                to="/myother"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                RESERVATIONS
              </NavLink>
            </li>
            <li>

              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex w-full p-2 gap-x-1"
                to="/myadd"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                ADD HOTEL
              </NavLink>
            </li>
            <li>

              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex w-full p-2 gap-x-1"
                to="/mydelete"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                DELETE HOTEL
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
