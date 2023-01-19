/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import printStars from '../../modules/star/printStars';
import { fetchUserReservations } from '../../redux/reservations/reservationsSlice';
import BackButton from '../backButton/BackButton';

const Reservations = () => {
  const navigate = useNavigate();
  const { reservations, loading, rejected } = useSelector(
    (state) => state.reservations,
  );
  const stateData = useSelector((state) => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserReservations(stateData));
  }, []);

  const reservationsArr = reservations;

  if (loading) {
    return (
      <p className="mt-[15%] ml-[35%] font-Taxicab text-2xl text-gray-600">
        LOADING...
      </p>
    );
  }

  if (rejected) return <p>Oops...Something went wrong here!</p>;

  return (
    <div className="h-screen w-full">
      <section className="flex flex-col items-center pt-[10vh] md:pt-[22vh]">
        <img
          className="w-sm-6/12 w-4/12 self-center md:hidden"
          src="/static/logo.png"
          alt=""
          onClick={() => navigate('/')}
        />
        <h2 className="mb-10 font-Taxicab text-3xl capitalize text-gray-800">
          my reservations
        </h2>

        <div className="flex w-[80%] justify-between bg-gray-500 py-2 px-2 font-Taxicab text-lg uppercase">
          <h3 className="text-slate-50">ROOM</h3>
          <h3 className="text-slate-50">HOTEL</h3>
          <h3 className="text-slate-50 md:mr-12">RATING</h3>
          <h3 className="hidden text-slate-50 sm:block">DATE</h3>
          <h3 className="text-slate-50">PRICE</h3>
        </div>

        <div className="h-[calc(100vh-400px)] w-[80%] overflow-y-auto">
          {reservationsArr
            && reservationsArr.map((reservation) => (
              <tr
                key={reservation.id}
                className="flex w-full items-center justify-between even:bg-white"
              >
                <p className="w-10 flex-auto font-bold text-gray-400">
                  {reservation.room_type.name}
                </p>
                <p className="w-0 flex-auto py-4 sm:mr-12">
                  {reservation.hotel.name}
                </p>
                <p className="w-0 flex-auto py-4">
                  <>
                    <div className="hidden md:block">
                      {printStars(reservation.hotel.rating)}
                    </div>
                    <div className="block text-center md:hidden">
                      {reservation.hotel.rating}
                    </div>
                  </>
                </p>
                <p className="hidden w-0 flex-auto py-4 text-right sm:block">
                  {reservation.date}
                </p>
                <p className="w-0 flex-auto py-4 text-right sm:pl-8">
                  $
                  {reservation.room_type.price}
                </p>
              </tr>
            ))}
        </div>
      </section>
      <BackButton />
    </div>
  );
};

export default Reservations;
