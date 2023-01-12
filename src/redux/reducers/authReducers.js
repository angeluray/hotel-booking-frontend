// constant
// const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

// // Action creator for display users signup
// const displayAuthenticate = (payload) => ({
//   type: SIGNUP_SUCCESS,
//   payload,
// });

// get (load) users from API
// export const registerUser = (userInfo) => async () => {
//   await fetch(`${BASE_URL}create`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userInfo),
//   });
// };

// initial states
// const initialState = {
//   name: '',
//   email: '',
//   loggedIn: false,
//   currentUser: {},
// };

// // Reducer for users
// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case SIGNUP_SUCCESS:
//         return {
//           authChecked: true,
//           loggedIn: true,
//           currentUser: action.payload,
//         };
//       default:
//         return state;
//     }
//   };

// export default authReducer;
