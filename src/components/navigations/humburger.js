import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../media/logo.png';

function Navigation() {
  const myNavLinksEffect = ({ isActive }) => ({
    backgroundColor: isActive ? 'rgb(132 204 22)' : 'transparent',
    color: isActive ? 'rgb(241 245 249)' : 'rgb(51 65 85)',
  });

  const logOutUser = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.history.back();
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div>
        <div className="flex items-center pl-5 border-b-2 justify-between lg:border-0 lg:bg-transparent lg:justify-start lg:pl-0 lg:items-center">
          <div
            className="cursor-pointer lg:p-2 lg:ml-5 hover:bg-stone-200 rounded-full"
            id="burger"
            onClick={handleToggle}
            role="button"
            onKeyUp={handleToggle}
            tabIndex="-1"
          >
            {navbarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
          <div className="flex justify-center" id="menu">
            <img src={logo} className="w-48 pr-3" alt="Hotelator. logo" />
          </div>
        </div>
        <nav
          className="flex lg:flex-col w-full lg:pt-40 lg:h-screen lg:bg-slate-50 shadow-md border-b-1 lg:border lg:gap-y-24 navigation absolute top-15 lg:top-0 -z-50 lg:w-80 lg:justify-between"
          id={`${navbarOpen ? 'showMenu' : 'hide'}`}
        >
          <ul
            className="showlist flex w-full lg:flex-col lg:w-11/12 lg:self-end lg:justify-self-center lg:text-lg font-sans lg:font-extrabold text-xs"
            id="menu"
          >
            <li className="w-1/3 lg:w-full">
              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex items-center w-full p-2 gap-x-1"
                to="/"
                end
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
                HOTELS
              </NavLink>
            </li>
            <li className="w-1/3 lg:w-full">
              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex items-center w-full p-2 gap-x-1"
                to="/reserve"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                RESERVE
              </NavLink>
            </li>
            <li className="w-1/3 lg:w-full">
              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex items-center w-full p-2 gap-x-1"
                to="/reservation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                RESERVATIONS
              </NavLink>
            </li>
            <li className="w-1/3 lg:w-full">
              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex items-center w-full p-2 gap-x-1 truncate"
                to="/myadd"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                ADD HOTEL
              </NavLink>
            </li>
            <li className="w-1/3 lg:w-full">
              <NavLink
                style={myNavLinksEffect}
                className="text-primary link flex items-center w-full p-2 gap-x-1 truncate"
                to="/mydelete"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                DELETE HOTEL
              </NavLink>
            </li>
          </ul>

          <div className="lg:w-full lg:self-end lg:pb-9">
            <div className="hidden lg:w-full lg:flex lg:justify-center lg:pb-4">
              <button
                type="button"
                onClick={logOutUser}
                className="lg:w-2/4 font-sans font-semibold rounded-md p-2 text-base text-slate-50 transition ease-in-out delay-150 bg-lime-500 hover:-translate-y-1 hover:scale-110 hover:bg-lime-600 duration-300"
              >
                Log Out
              </button>
            </div>
            <a
              href="https://github.com/angeluray/hotel-booking-backend"
              className="hidden lg:flex lg:justify-center lg:items-center lg:text-slate-300 lg:hover:underline"
            >
              Source code in
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNjYmQ1ZTEiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTAuNjY2NjcsMTAuNjY2NjcpIj48cGF0aCBkPSJNMTAuOSwyLjFjLTQuNiwwLjUgLTguMyw0LjIgLTguOCw4LjdjLTAuNSw0LjcgMi4yLDguOSA2LjMsMTAuNWMwLjMsMC4xIDAuNiwtMC4xIDAuNiwtMC41di0xLjZjMCwwIC0wLjQsMC4xIC0wLjksMC4xYy0xLjQsMCAtMiwtMS4yIC0yLjEsLTEuOWMtMC4xLC0wLjQgLTAuMywtMC43IC0wLjYsLTFjLTAuMywtMC4xIC0wLjQsLTAuMSAtMC40LC0wLjJjMCwtMC4yIDAuMywtMC4yIDAuNCwtMC4yYzAuNiwwIDEuMSwwLjcgMS4zLDFjMC41LDAuOCAxLjEsMSAxLjQsMWMwLjQsMCAwLjcsLTAuMSAwLjksLTAuMmMwLjEsLTAuNyAwLjQsLTEuNCAxLC0xLjhjLTIuMywtMC41IC00LC0xLjggLTQsLTRjMCwtMS4xIDAuNSwtMi4yIDEuMiwtM2MtMC4xLC0wLjIgLTAuMiwtMC43IC0wLjIsLTEuNGMwLC0wLjQgMCwtMC45IDAuMiwtMS4zYzAsLTAuMiAwLjIsLTAuMyAwLjMsLTAuM2gwLjFjMC41LDAuMSAxLjUsMC40IDIuNCwxLjNjMC42LC0wLjIgMS4zLC0wLjMgMiwtMC4zYzAuNywwIDEuNCwwLjEgMiwwLjNjMC45LC0wLjkgMiwtMS4yIDIuNSwtMS4zaDAuMWMwLjIsMCAwLjMsMC4xIDAuNCwwLjNjMCwwLjQgMCwwLjkgMCwxLjNjMCwwLjggLTAuMSwxLjIgLTAuMiwxLjRjMC43LDAuOCAxLjIsMS44IDEuMiwzYzAsMi4yIC0xLjcsMy41IC00LDRjMC42LDAuNSAxLDEuNCAxLDIuM3YyLjZjMCwwLjMgMC4zLDAuNiAwLjcsMC41YzMuNywtMS41IDYuMywtNS4xIDYuMywtOS4zYzAsLTYgLTUuMSwtMTAuNyAtMTEuMSwtMTB6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"
              />
            </a>
            <p className="hidden lg:flex lg:justify-center lg:items-center lg:text-slate-300">
              All rights reserved by creators
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
