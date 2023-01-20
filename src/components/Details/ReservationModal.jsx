/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import getToday from '../../modules/getToday';

const ReservationModal = ({
  visible,
  onOk,
  onCancel,
  hotelInfo,
  roomTypes,
}) => {
  const [reservationDate, setReservationDate] = useState(getToday());
  const [room, setRoom] = useState(null);
  const handleVisible = () => {
    if (visible) return 'block ';
    return 'hidden ';
  };

  const city = hotelInfo[0].city_id;
  const hotelName = hotelInfo[0].name;

  return (
    <div
      className={`${handleVisible()}absolute top-0 left-0 h-screen w-screen bg-black/20`}
    >
      <section className='relative mx-[10%] mt-[10%] flex flex-col bg-slate-50 xl:mx-[25%] '>
        <h3 className='border-b-2 px-4 py-2 font-Taxicab text-xl'>
          Make your reservation
        </h3>

        <i
          className='fa-solid fa-xmark absolute top-2 right-4 text-xl hover:text-red-600'
          onClick={onCancel}
        />

        <table
          className='mx-[5%] mt-6 table-auto md:mx-auto md:w-[550px]'
          cellPadding={2}
        >
          <tbody>
            <tr>
              <td className='w-fit text-right'>
                <label htmlFor='city'>Location:</label>
              </td>
              <td>
                <input
                  className='w-full rounded-md border bg-neutral-400 px-2 py-1 text-neutral-700 '
                  type='text'
                  id='city'
                  name='city'
                  value={city}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className='w-fit text-right'>
                <label htmlFor='hotel'>Hotel:</label>
              </td>
              <td>
                <input
                  className='w-full rounded-md border bg-neutral-400 px-2 py-1 text-neutral-700 '
                  type='text'
                  id='hotel'
                  name='hotel'
                  value={hotelName}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className='w-fit text-right'>
                <label htmlFor='roomType'>Room:</label>
              </td>
              <td>
                <select
                  name='roomType'
                  id='roomType'
                  value={room || 'defaultValue'}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value='defaultValue' disabled>
                    Select a room:
                  </option>
                  {roomTypes.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td className='w-fit text-right'>
                <label htmlFor='datePicker'>Reservation date:</label>
              </td>
              <td>
                <input
                  className='w-full rounded-md border px-2 py-1 hover:ring-1'
                  type='date'
                  id='datePicker'
                  name='datePicker'
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className='mt-6 flex flex-col items-center px-6 text-center'>
          {room && (
            <>
              <h4 className='font-Taxicab text-2xl'>
                {roomTypes[room - 1].name}
              </h4>
              <p>{roomTypes[room - 1].description}</p>
              <div className='flex gap-4 '>
                <p>
                  <strong>Price:</strong>
                </p>
                <p>${roomTypes[room - 1].price} USD</p>
              </div>
            </>
          )}
        </div>

        <div className='mt-6 flex justify-end gap-4 border-t-2 py-4 px-4'>
          <button
            className='rounded-md bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-300 hover:text-green-800'
            type='button'
            onClick={() => onOk(reservationDate, room)}
          >
            Confirm
          </button>
          <button
            className='rounded-md bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-300 hover:text-red-800'
            type='button'
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReservationModal;
