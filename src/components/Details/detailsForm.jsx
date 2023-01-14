import React from 'react';

function DetailsForm() {
  return (
    <section className='flex mx-[5vw] my-[25vh] justify-between w-[80vw]'>
      <img
        className='w-[40vw] mr-4'
        src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/309838581.jpg?k=7ade646d075801f8ccb110f9f92a6ea4abf2387d29b58b911a05b2c8209765f2&o=&hp=1'
        alt='placeholder'
      />
      <div className='flex flex-col items-end'>
        <h2 className='mb-10'>ROOM NAME</h2>
        <p className='text-right'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
          elementum felis. Nunc ut enim tincidunt, ullamcorper erat in,
          hendrerit urna. Donec nibh est, molestie vel aliquam porta,
          condimentum porttitor tellus. Proin non tortor ullamcorper, vulputate
          leo et, sollicitudin diam. Phasellus efficitur nisi eget metus
          commodo, in egestas nibh efficitur. Nulla pharetra imperdiet orci nec
          mattis.
        </p>
        <table>
          <tr>
            <td>CAPACITY:</td>
            <td>3</td>
          </tr>
          <tr>
            <td>PRICE:</td>
            <td>300$</td>
          </tr>
          <tr>
            <td>HOTEL:</td>
            <td>5 Seasons</td>
          </tr>
        </table>
        <button className='mt-auto py-3 px-8 bg-lime-400 rounded-lg'>
          Reserve
        </button>
      </div>
    </section>
  );
}

export default DetailsForm;
