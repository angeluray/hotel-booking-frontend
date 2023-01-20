/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HotelItem from './hotels/hotelItem';
import { getAllHotels } from '../redux/hotel/hotel';

function Index() {
  const hotels = useSelector((state) => state.hotel.all);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(3);
  const [inactiveUp, setInactiveUp] = useState(true);
  const [inactiveDown, setInactiveDown] = useState(false);

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  useEffect(() => {
    if (currentPage === 1) {
      setInactiveDown(true);
    } else {
      setInactiveDown(false);
    }
    if (indexOfLastHotel < hotels.length - 1) {
      setInactiveUp(false);
    } else {
      setInactiveUp(true);
    }
  }, [currentHotels]);

  const handlePageUp = () => {
    if (indexOfLastHotel < hotels.length) {
      setCurrentPage((page) => page + 1);
    }
  };

  const handlePageDown = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <div className='flex items-center'>
      <div className='flex h-screen items-center justify-center'>
        <i
          className={`fa-solid fa-caret-left absolute left-0 h-[50px] rounded-r-full bg-gray-200 py-4 px-6 text-slate-50 md:left-[20%] ${
            inactiveDown ? 'hover:not' : 'hover:bg-lime-400'
          }`}
          onClick={handlePageDown}
        />
        <div className='grid w-10/12 grid-cols-1 gap-3 p-5 md:grid-cols-3 md:grid-rows-1 sm:'>
          {currentHotels.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
        <i
          className={`fa-solid fa-caret-right absolute right-0 h-[50px] rounded-l-full bg-lime-400 py-4 px-6 text-slate-50 ${
            inactiveUp ? 'hover:not' : 'hover:bg-gray-200'
          }`}
          onClick={handlePageUp}
        />
      </div>
    </div>
  );
}

export default Index;
