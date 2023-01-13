import React, { useState } from 'react';

const ReservationModal = ({ visible, onOk, onCancel }) => {
  const [reservationDate, setReservationDate] = useState(new Date());
  const handleVisible = () => {
    if (visible) return 'block ';
    else return 'hidden ';
  };

  const city = 'Addis Ababa - Dummy';
  const hotel = 'Luxury hotel - Dummy';
  const hotelRoom = 'Lusy Special - Dummy';

  return (
    <div
      className={
        handleVisible() + 'bg-black/20 absolute top-0 left-0 w-screen h-screen'
      }
    >
      <section className='bg-slate-50 mt-[10%] mx-[10%] xl:mx-[25%] flex flex-col relative '>
        <h3 className='font-Taxicab text-xl border-b-2 px-4 py-2'>
          Make your reservation
        </h3>
        <i
          class='fa-solid fa-xmark absolute top-2 right-4 text-xl hover:text-red-600'
          onClick={onCancel}
        ></i>

        <table
          className='table-auto mx-[5%] md:mx-auto md:w-[550px] mt-6'
          cellPadding={2}
        >
          <tbody>
            <tr>
              <td className='text-right w-fit'>
                <label htmlFor='city'>City:</label>
              </td>
              <td>
                <input
                  className='rounded-md border px-2 py-1 w-full bg-neutral-400 text-neutral-700 '
                  type='text'
                  id='city'
                  name='city'
                  value={city}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className='text-right w-fit'>
                <label htmlFor='hotel'>Hotel:</label>
              </td>
              <td>
                <input
                  className='rounded-md border px-2 py-1 w-full bg-neutral-400 text-neutral-700 '
                  type='text'
                  id='hotel'
                  name='hotel'
                  value={hotel}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className='text-right w-fit'>
                <label htmlFor='hotelRoom'>Room:</label>
              </td>
              <td>
                <input
                  className='rounded-md border px-2 py-1 w-full bg-neutral-400 text-neutral-700 '
                  type='text'
                  id='hotelRoom'
                  name='hotelRoom'
                  value={hotelRoom}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className='text-right w-fit'>
                <label htmlFor='datePicker'>Reservation date:</label>
              </td>
              <td>
                <input
                  className='rounded-md border px-2 py-1 w-full hover:ring-1'
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

        <div className='flex gap-4 py-4 justify-end mt-6 px-4 border-t-2'>
          <button
            className='px-4 py-2 rounded-md text-white hover:bg-green-300 hover:text-green-800 font-semibold bg-green-600'
            type='button'
            onClick={onOk}
          >
            Confirm
          </button>
          <button
            className='px-4 py-2 rounded-md text-white hover:bg-red-300 hover:text-red-800 font-semibold bg-red-600'
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
