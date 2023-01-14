/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line quotes
import { useForm } from "react-hook-form";
import { addHotel } from '../../redux/hotel/hotel';
import { getAllCities } from '../../redux/city/cityReducer';

const FormHotel = () => {
  const dispatch = useDispatch();
  const displayFullCities = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm();

  const submitHotel = (hotelData) => {
    dispatch(addHotel({ ...hotelData }));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHotel)}>

        <input className="myInput" type="text" defaultValue="Los Roques Hotel" {...register('name', { required: true, maxLength: 45 })} />
        {errors.name && <span>Hotel name is required</span>}

        <input type="text" className="myInput" {...register('description', { required: true, maxLength: 200 })} />
        {/* errors will return when field validation fails  */}
        {errors.description && <span>Hotel description is required</span>}

        <input className="myInput" type="number" defaultValue="4.5" {...register('rating', { required: true, min: 1, max: 5 })} />
        {errors.description && <span>Hotel rating is required</span>}

        <input className="myInput" type="file" alt="Hotel photo" {...register('image', { required: true })} />
        {errors.image && <span>Hotel image is required</span>}

        <select defaultValue={4} {...register('city_id', { required: true })}>
          {displayFullCities && displayFullCities.map((city) => (
            <option key={city.id + 1} value={city.id}>{city.name}</option>
          ))}
        </select>
        {errors.city_id && <span>Hotel location is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormHotel;
