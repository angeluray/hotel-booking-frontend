/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Cancel, CheckCircle } from '@mui/icons-material';

const ConfirmDelete = ({
  visible, onOk, onCancel, hotel,
}) => {
  const handleVisible = () => {
    if (visible) return 'block ';
    return 'hidden ';
  };

  return (
    <div
      className={
        `${handleVisible()
        }absolute top-0 left-0 z-30 h-screen w-screen bg-black/20`
      }
    >
      <section className="relative mx-[10%] mt-[10%] flex flex-col bg-slate-50 xl:ml-[30%] ">
        <h3 className="border-b-2 px-4 py-2 font-Taxicab text-xl">
          Please confirm:
        </h3>
        <i
          className="fa-solid fa-xmark absolute top-2 right-4 text-xl hover:text-red-600"
          onClick={onCancel}
        />

        <p className="px-6 py-4 text-lg text-black">
          Are you sure you want to delete
          {' '}
          <strong>{hotel.name}</strong>
          {' '}
          and all
          its related information?
        </p>

        <div className="mt-6 flex flex-col justify-end gap-4 border-t-2 py-4 px-4 sm:flex-row">
          <button
            className="flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-300 hover:text-green-800 dark:text-white"
            type="button"
            onClick={onOk}
          >
            <>Confirm</>
            <CheckCircle />
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-300 hover:text-red-800"
            type="button"
            onClick={onCancel}
          >
            <>Cancel</>
            <Cancel />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConfirmDelete;
