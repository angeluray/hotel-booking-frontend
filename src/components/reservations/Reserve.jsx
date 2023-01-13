import React, { useState } from 'react';
import getToday from '../../modules/getToday';
import { cities, hotels, roomTypes } from '../../modules/mockupData'; //! This mock up file will be deleted after connect to API

const Reserve = () => {
  const [reservationDate, setReservationDate] = useState(getToday());
  // todo: connect cities endpoint to fetch all available cities in DB
  // !This is a mockup connection to simulate an array of objects for cities
  const fetchedCities = cities;
  // !This is a mockup connection to simulate an array of objects for hotels
  const fetchedHotels = hotels;
  // !This is a mockup connection to simulate an array of objects for roomTypes
  const fetchedRooms = roomTypes;
  return (
    <section className='flex flex-col w-full h-screen px-6 py-4'>
      <header className='ml-6 mt-6'>
        <h2 className='font-Obscura-regular text-3xl'>Add Reservation</h2>
      </header>
      <div className='flex flex-col md:grid md:grid-cols-2 place-items-center gap-6 items-center justify-center h-full'>
        <article>
          <table cellPadding={4}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='city'>City:</label>
                </td>
                <td>
                  <select
                    className='w-48'
                    name='city'
                    id='city'
                    defaultValue={'defaultSelect'}
                  >
                    <option value='defaultSelect' disabled>
                      Select a city:
                    </option>
                    {fetchedCities.map((city) => (
                      <option key={city.key} value={city.key}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='hotel'>Hotel:</label>
                </td>
                <td>
                  <select
                    className='w-48'
                    name='hotel'
                    id='hotel'
                    defaultValue={'defaultSelect'}
                  >
                    <option value='defaultSelect' disabled>
                      Select a hotel:
                    </option>
                    {fetchedHotels.map((hotel) => (
                      <option key={hotel.key} value={hotel.key}>
                        {hotel.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='room'>Room:</label>
                </td>
                <td>
                  <select
                    className='w-48'
                    name='roomType'
                    id='roomType'
                    defaultValue={'defaultSelect'}
                  >
                    <option value='defaultSelect' disabled>
                      Select a room:
                    </option>
                    {fetchedRooms.map((room) => (
                      <option key={room.key} value={room.key}>
                        {room.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
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
          <button type='button'>Confirm reservation</button>
        </article>
        <article>
          <h4>Room name:</h4>
          <p>
            description: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Capacity:</strong>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>
                  <strong>Price:</strong>
                </td>
                <td>$10 USD</td>
              </tr>
            </tbody>
          </table>
          {/* Convert to a link with the endpoint */}
          <button type='button'>See room</button>
        </article>
      </div>
    </section>
  );
};

export default Reserve;
