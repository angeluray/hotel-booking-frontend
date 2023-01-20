import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCityAPI } from '../../redux/reducers/citiesReducers';

function DisplayFullCities() {
  const dispatch = useDispatch();
  const displayCities = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(fetchCityAPI());
  }, [dispatch]);

  return (
    <div>
      {displayCities.map((city) => (
        <h1 key={city.id}>{city.name}</h1>
      ))}
    </div>
  );
}

export default DisplayFullCities;
