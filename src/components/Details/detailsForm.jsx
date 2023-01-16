import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getRoomTypes } from '../../redux/roomTypes/roomTypesSlice';
import BackButton from '../backButton/BackButton';
import ReservationModal from './ReservationModal';
import handleImage from '../../modules/image/HandleImage';
import printStars from '../../modules/star/PrintStars';
import { fetchDetails } from '../../redux/details/detailsReducer';
import {
  createReservation,
  resetCreateReservationStatus,
} from '../../redux/reservations/reservationsSlice';

function DetailsForm({ token }) {
  const dispatch = useDispatch();
  let params = useParams();
  const roomId = params.roomId;

  useEffect(() => {
    dispatch(getRoomTypes(token));
    dispatch(fetchDetails(roomId));
  }, []);

  let navigateTo = useNavigate();

  const { roomDetails, loading } = useSelector((state) => state.details);

  // Modal controllers
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const handleOk = (date, room) => {
    const reservationData = {
      date,
      hotel_id: roomDetails.id,
      room_type_id: parseInt(room),
    };
    dispatch(createReservation({ token, reservationData }));
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const { getRoomStatus, types } = useSelector((state) => state.roomTypes);

  // handle alert after reservation creation
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
  }, [createReservationStatus]);

  if (loading && !getRoomStatus === 'fulfilled')
    return (
      <p className='mt-[15%] ml-[35%] font-Taxicab text-2xl text-gray-600'>
        LOADING...
      </p>
    );

  if (roomDetails.length !== 0) {
    return (
      <div className='h-screen w-full bg-slate-100'>
        <section className='flex h-3/5 flex-col items-center justify-evenly md:flex-row px-20 mt-[10rem]'>
          {createReservationStatus === 'fulfilled' && (
            <div className='absolute bottom-4 right-4 z-10 rounded  bg-green-200 px-4 py-2 text-green-700'>
              Reservation succesfully created!
            </div>
          )}
          {createReservationStatus === 'rejected' && (
            <div className='absolute bottom-4 right-4 z-10 rounded bg-red-200 px-4 py-2 text-red-700'>
              Ups! Something went wrong
            </div>
          )}
          <img
            src={handleImage(roomDetails.image)}
            alt='placeholder'
            className='w-3/5 sm:w-2/5'
          />
          <div className='flex flex-col items-center md:items-end'>
            <h2 className='mb-3 font-Taxicab text-3xl font-bold capitalize text-gray-800'>
              {roomDetails.name.toUpperCase()}
            </h2>
            <p className='mb-10 md:text-right'>{roomDetails.description}</p>
            <table>
              <tbody className='md:text-right'>
                <tr>
                  <td className='py-1 px-4 text-left'>Rating:</td>
                  <td className='py-1 px-4'>
                    {printStars(roomDetails.rating)}
                  </td>
                </tr>
                <tr className='bg-gray-200'>
                  <td className='py-1 px-4 text-left'>Country:</td>
                  <td className='py-1 px-4'>{roomDetails.city.name}</td>
                </tr>
              </tbody>
            </table>
            {token && (
              <>
                <button
                  className='mt-12 rounded-full bg-lime-400 py-3 px-4 text-slate-50 hover:bg-lime-500'
                  onClick={openModal}
                >
                  <i className='fa-solid fa-calendar-check mr-2'></i>Reserve
                  <i className='fa-solid fa-circle-chevron-right ml-4'></i>
                </button>
                <ReservationModal
                  visible={modalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  hotelInfo={roomDetails}
                  roomTypes={types}
                />
              </>
            )}
          </div>
          <BackButton />
        </section>
      </div>
    );
  }
}

export default DetailsForm;
