// import { FormatAlignCenter } from '@mui/icons-material';
// import { display } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getToday from '../../modules/getToday';
import { getAllCities } from '../../redux/city/cityReducer';
import { getHotelsByCity } from '../../redux/hotel/hotelHelper';
import {
  createReservation,
  resetCreateReservationStatus,
} from '../../redux/reservations/reservationsSlice';
import { getRoomTypes } from '../../redux/RoomTypes/roomTypesSlice';
import BackButton from '../backButton/BackButton';

// eslint-disable-next-line react/prop-types
const Reserve = ({ token }) => {
  const dispatch = useDispatch();

  const displayUser = useSelector((state) => state.login);

  const [cities, setCities] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [cityId, setCityId] = useState(null);

  const [reservationDate, setReservationDate] = useState(getToday());
  const [hotelId, setHotelId] = useState(null);
  const [roomTypeId, setRoomTypeId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCities());
    dispatch(getRoomTypes(token));
  }, [dispatch, token]);
  const { all: fetchedCities } = useSelector((state) => state.city);
  useEffect(() => {
    setCities(fetchedCities);
  }, [fetchedCities]);
  const { types } = useSelector((state) => state.roomTypes);
  useEffect(() => {
    setRooms(types);
  }, [types]);

  useEffect(() => {
    if (cityId) {
      dispatch(getHotelsByCity({ token, id: cityId }));
    }
  }, [cityId, dispatch, token]);
  const { hotelsByCity } = useSelector((state) => state.hotel);
  useEffect(() => {
    setHotels(hotelsByCity);
  }, [hotelsByCity]);

  const handleConfirmation = () => {
    if (hotelId && roomTypeId) {
      const reservationData = {
        date: reservationDate,
        hotel_id: hotelId,
        room_type_id: roomTypeId,
        user_id: displayUser.userId,
      };
      dispatch(createReservation({ token, reservationData }));
    }
  };

  const { createReservationStatus } = useSelector(
    (state) => state.reservations
  );
  useEffect(() => {
    if (
      createReservationStatus === 'fulfilled' ||
      createReservationStatus === 'rejected'
    ) {
      setTimeout(() => {
        dispatch(resetCreateReservationStatus());
      }, 3000);
    }
  }, [createReservationStatus, dispatch]);

  return (
    <section className='flex h-screen w-full flex-col items-center justify-center px-6 py-4 pt-[22vh]'>
      {createReservationStatus === 'fulfilled' && (
        <div className='absolute bottom-4 right-4 z-10 rounded  bg-green-200 px-4 py-2 text-green-700'>
          Reservation succesfully created!
          {window.location.reload()}
        </div>
      )}
      {createReservationStatus === 'rejected' && (
        <div className='absolute bottom-4 right-4 z-10 rounded bg-red-200 px-4 py-2 text-red-700'>
          Ups! Something went wrong
        </div>
      )}
      <img
        className='w-sm-6/12 w-4/12 self-center md:hidden'
        src='/static/logo.png'
        alt=''
        onClick={() => navigate('/')}
      />
      <header>
        <h2 className='font-Taxicab text-3xl capitalize text-gray-800'>
          Add Reservation
        </h2>
      </header>
      <div className='mt-10 flex h-full w-min flex-col items-center gap-6'>
        <article>
          <table cellPadding={4}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='city'>Country:</label>
                </td>
                <td>
                  <select
                    className='w-48'
                    name='city'
                    id='city'
                    value={cityId || 'defaultSelect'}
                    onChange={(e) => setCityId(e.target.value)}
                  >
                    <option value='defaultSelect' disabled>
                      Select a country:
                    </option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {cityId && (
                <tr>
                  <td>
                    <label htmlFor='hotel'>Hotel:</label>
                  </td>
                  <td>
                    <select
                      className='w-48'
                      name='hotel'
                      id='hotel'
                      value={hotelId || 'defaultSelect'}
                      onChange={(e) => setHotelId(e.target.value)}
                    >
                      <option value='defaultSelect' disabled>
                        Select a hotel:
                      </option>
                      {hotels.map((hotel) => (
                        <option key={hotel.id} value={hotel.id}>
                          {hotel.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              {hotelId && (
                <tr>
                  <td>
                    <label htmlFor='room'>Room:</label>
                  </td>
                  <td>
                    <select
                      className='w-48'
                      name='roomType'
                      id='roomType'
                      value={roomTypeId || 'defaultSelect'}
                      onChange={(e) => setRoomTypeId(e.target.value)}
                    >
                      <option value='defaultSelect' disabled>
                        Select a room:
                      </option>
                      {rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor='date'>Reservation date:</label>
                </td>
                <td>
                  <input
                    className='w-48'
                    name='date'
                    id='date'
                    type='date'
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          {roomTypeId && (
            <>
              <h4 className='font-Taxicab text-2xl'>
                {rooms[roomTypeId - 1].name}
              </h4>
              <p>{rooms[roomTypeId - 1].description}</p>
              <div className='flex gap-4'>
                <p>
                  <strong>Price:</strong>
                </p>
                <p>${rooms[roomTypeId - 1].price} USD</p>
              </div>
            </>
          )}
        </article>
        <button
          type='button'
          className='mt-6 self-start rounded-md bg-lime-400 px-4 py-2 font-semibold text-white hover:bg-gray-200'
          onClick={handleConfirmation}
        >
          Confirm reservation
        </button>
      </div>
      <BackButton />
    </section>
  );
};

export default Reserve;
