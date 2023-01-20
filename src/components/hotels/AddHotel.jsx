import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHotel } from '../../redux/hotel/hotel';
import { getAllCities } from '../../redux/city/cityReducer';
import BackButton from '../backButton/BackButton';

const AddHotel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, []);

  const [newHotel, setNewHotel] = useState({
    name: '',
    description: '',
    image: '',
    rating: 1,
    city: 0,
  });

  const onChangeHandler = (event) => {
    if (event.target.name === 'image') {
      setNewHotel({ ...newHotel, [event.target.name]: event.target.value });
    } else {
      setNewHotel({ ...newHotel, [event.target.name]: event.target.value });
    }
  };

  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);
  const cities = useSelector((state) => state.city.all);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (newHotel.city !== 0) {
      document.querySelector('#city-error').classList.add('hidden');
      const formData = new FormData();
      formData.append('name', newHotel.name);
      formData.append('description', newHotel.description);
      formData.append('rating', newHotel.rating);
      formData.append('image', newHotel.image);
      formData.append('city_id', newHotel.city);
      dispatch(
        addHotel({
          hotel: formData,
          token,
          goToHome: () => navigate('/', { replace: true }),
        })
      );
    } else {
      document.querySelector('#city-error').classList.remove('hidden');
    }
  };

  return (
    <div className='flex h-screen items-center justify-center pt-[10vh]'>
      <form
        onSubmit={submitHandler}
        method='post'
        className='w-sm-3/4 flex flex-col items-end gap-3 p-9'
      >
        <img
          className='w-sm-6/12 w-4/12 self-center md:hidden'
          src='/static/logo.png'
          alt=''
          onClick={() => navigate('/')}
        />
        <h2 className='w-full text-center text-3xl text-gray-800'>
          Add a New Hotel
        </h2>
        <div className='w-full'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter hotel name'
            value={newHotel.name}
            onChange={onChangeHandler}
            autoComplete='off'
            className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none'
            required
          />
        </div>
        <div className='w-full'>
          <label htmlFor='rating'>Rating</label>
          <input
            type='number'
            name='rating'
            min='1'
            max='5'
            step='0.5'
            value={newHotel.rating}
            onChange={onChangeHandler}
            autoComplete='off'
            className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none'
          />
        </div>
        <div className='w-full'>
          <label htmlFor='city'>Country</label>
          <select
            name='city'
            onChange={onChangeHandler}
            autoComplete='off'
            className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none'
            defaultValue='defaultSelect'
            required
          >
            <option value='defaultSelect' disabled>
              Select a country:
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          <p id='city-error' className='hidden w-full text-red-600'>
            Please enter a valid city name
          </p>
        </div>
        <div className='w-full'>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            name='description'
            placeholder='Enter hotel description'
            value={newHotel.description}
            onChange={onChangeHandler}
            autoComplete='off'
            className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none'
            required
          />
        </div>
        <div className='w-full'>
          <label htmlFor='image'>Image</label>
          <input
            type='text'
            name='image'
            placeholder='Enter image url here'
            onChange={onChangeHandler}
            className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none'
            required
          />
        </div>
        <button
          type='submit'
          className='focus:shadow-outline appearance-none rounded border bg-lime-400 py-2 px-3 leading-tight text-white hover:bg-blue-500 focus:outline-none'
        >
          Add
        </button>
      </form>
      <BackButton />
    </div>
  );
};

export default AddHotel;
