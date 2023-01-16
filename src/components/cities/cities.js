import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCities } from '../../redux/city/cityReducer';

function DisplayFullCities() {
  const dispatch = useDispatch();
  const displayCities = useSelector((state) => state.cities.all);
  console.log(displayCities);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      {
      displayCities && displayCities.map((city) => (
        <h1 key={city.id}>{city.name}</h1>
      ))
      }
    </div>
  );
}

export default DisplayFullCities;
