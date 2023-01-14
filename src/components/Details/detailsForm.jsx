import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../redux/details/detailsReducer';

function DetailsForm() {
  const dispatch = useDispatch();
  const room = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchDetails());
  }, [dispatch]);

  {
    console.log(room);
  }

  return (
    <>
    <section className='flex mx-[5vw] my-[25vh] justify-between w-[80vw]'>
      <img
        className='w-[40vw] mr-4'
        src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/309838581.jpg?k=7ade646d075801f8ccb110f9f92a6ea4abf2387d29b58b911a05b2c8209765f2&o=&hp=1'
        alt='placeholder' />
      <div className='flex flex-col items-end'>
        <h2 className='mb-3'>{room.name}</h2>
        <p className='text-right mb-10'>{room.description.slice(0, 50)}</p>
        <table>
          <tbody className='text-right'>
            <tr>
              <td>CAPACITY:</td>
              <td>3</td>
            </tr>
            <tr>
              <td>PRICE:</td>
              <td>${room.price}</td>
            </tr>
            <tr>
            </></tbody>
        </tr>
        <tr>
          <td>HOTEL:</td>
          <td> {room.name} Hotel</td>
        </tr>
      </tbody>
    </table>
      <button className='mt-auto py-3 px-8 bg-lime-400 rounded-lg'>
        Reserve
      </button></>
      </div>
    </section>
    </>
  );

}

export default DetailsForm;
