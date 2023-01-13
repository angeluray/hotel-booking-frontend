import React, { useState } from 'react';
import getToday from '../modules/getToday';
import { cities, hotels, roomTypes } from '../modules/mockupData'; //! This mock up file will be deleted after connect to API

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
    <section>
      <form action='submit'>
        <div>
          <label htmlFor='city'>City:</label>
          <select name='city' id='city' defaultValue={'defaultSelect'}>
            <option value='defaultSelect' disabled>
              Select a city:
            </option>
            {fetchedCities.map((city) => (
              <option key={city.key} value={city.key}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='hotel'>Hotel:</label>
          <select name='hotel' id='hotel' defaultValue={'defaultSelect'}>
            <option value='defaultSelect' disabled>
              Select a hotel:
            </option>
            {fetchedHotels.map((hotel) => (
              <option key={hotel.key} value={hotel.key}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='room'>Room:</label>
          <select name='roomType' id='roomType' defaultValue={'defaultSelect'}>
            <option value='defaultSelect' disabled>
              Select a room:
            </option>
            {fetchedRooms.map((room) => (
              <option key={room.key} value={room.key}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='date'>Reservation date:</label>
          <input
            name='date'
            id='date'
            type='date'
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </div>
        <button>Confirm reservation</button>
      </form>
      <article>
        <h4>Room name:</h4>
        <p>
          description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis saepe numquam, incidunt alias vitae quod dolore deserunt animi
          libero tempora.
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
              <td>$5 USD</td>
            </tr>
          </tbody>
        </table>
        <button type='button'>See room</button>
      </article>
    </section>
  );
};

export default Reserve;
