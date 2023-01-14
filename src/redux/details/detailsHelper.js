import { getDetailsSuccess } from './detailsReducer';

// eslint-disable-next-line import/prefer-default-export
export const fetchDetails = (roomId) => async (dispatch) => {
  const URL = `https://hotel-api-4.herokuapp.com/api/v1/hotels/${roomId}`;
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      dispatch(getDetailsSuccess(data));
    })
    .catch((error) => {
      // dispatch(getDetailsFail())
      console.log(error);
    });
};
