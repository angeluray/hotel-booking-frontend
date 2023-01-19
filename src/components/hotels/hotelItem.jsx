/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HotelItem({ hotel }) {
  return (
    <Link to={`/${hotel.id}`}>
      <div className="flex flex-col items-center gap-1">
        <div className="w-3/6 md:w-auto">
          <img
            src={
              hotel.image
                ? `${hotel.image}`
                : 'http://via.placeholder.com/640x360'
            }
            alt={hotel.name}
          />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div>{hotel.name}</div>
          <div className="text-center">
            {`${hotel.description.slice(0, 50)}...`}
          </div>
        </div>
      </div>
    </Link>
  );
}

HotelItem.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default HotelItem;
