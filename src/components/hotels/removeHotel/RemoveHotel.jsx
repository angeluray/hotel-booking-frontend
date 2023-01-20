import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { getAllHotels, resetDeleteStatus } from '../../../redux/hotel/hotel';
import { deleteHotel } from '../../../redux/hotel/hotelHelper';
import ConfirmDelete from './ConfirmDelete';
import BackButton from '../../backButton/BackButton';

const RemoveHotel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);
  const { all: hotels, deleteStatus } = useSelector((state) => state.hotel);
  const { token } = useSelector((state) => state.login);

  const handleClick = (hotelName) => {
    setmodalVisible(true);
    setModalInfo(hotelName);
  };
  const handleOk = () => {
    dispatch(deleteHotel({ id: modalInfo.id, token }));
    setmodalVisible(false);
    setModalInfo({});
  };
  const handleCancel = () => {
    setmodalVisible(false);
    setModalInfo({});
  };

  if (deleteStatus === 'fulfilled' || deleteStatus === 'rejected') {
    setTimeout(() => {
      dispatch(resetDeleteStatus());
    }, 3000);
  }

  useEffect(
    () => () => {
      dispatch(resetDeleteStatus());
    },
    [],
  );

  return (
    <>
      {deleteStatus === 'fulfilled' && (
        <div className="absolute bottom-4 right-4 z-10 rounded  bg-green-200 px-4 py-2 text-green-700">
          Hotel successfully deleted!
        </div>
      )}
      {deleteStatus === 'rejected' && (
        <div className="absolute bottom-4 right-4 z-10 rounded bg-red-200 px-4 py-2 text-red-700">
          Ups! Something went wrong
        </div>
      )}
      <section className="flex h-screen w-full">
        <div className="flex w-full flex-col items-center gap-3 p-9 md:mt-[22vh] md:p-0">
          <img
            className="w-4/12 md:hidden"
            src="/static/logo.png"
            alt="hotelator logo"
            onClick={() => navigate('/')}
          />
          <h2 className="mb-10 text-3xl capitalize text-gray-800">
            Delete hotel
          </h2>
          <div className="flex w-full flex-col md:w-3/5">
            <div className="flex bg-gray-500 font-Taxicab text-lg uppercase text-slate-50 dark:bg-gray-700 dark:text-gray-400">
              <div className="w-16 py-3 pl-6">Item</div>
              <div className="grow py-3 pl-6">Hotel name</div>
              <div className="w-20 py-3 pl-3">Action</div>
            </div>

            <div className="flex max-h-[40vh] flex-col overflow-y-auto overflow-x-hidden md:max-h-[60vh]">
              {hotels.map((hotel, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="flex even:bg-white">
                  <div className="w-16 shrink-0 py-3 pl-6">{index + 1}</div>
                  <div className="grow overflow-x-auto py-3 pl-6">
                    {hotel.name}
                  </div>
                  <div className="w-20 shrink-0 py-3 pl-6">
                    <button
                      className="rounded-md bg-red-500 text-slate-50"
                      type="button"
                      onClick={() => handleClick(hotel)}
                    >
                      <DeleteForeverIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ConfirmDelete
            visible={modalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            hotel={modalInfo}
          />
        </div>
      </section>
      <BackButton />
    </>
  );
};

export default RemoveHotel;
