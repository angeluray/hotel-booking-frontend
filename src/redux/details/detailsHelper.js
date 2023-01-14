import { getDetailsSuccess } from './detailsReducer';

const URL = 'https://hotel-api-4.herokuapp.com/api/v1/hotels/1';

// eslint-disable-next-line import/prefer-default-export
export const fetchDetails = () => async (dispatch) => {
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
