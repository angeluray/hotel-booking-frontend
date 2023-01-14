const hostURL = 'https://hotelator.onrender.com';

const handleImage = (img) => (img
  ? `${hostURL}${img.url}`
  : 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/309838581.jpg?k=7ade646d075801f8ccb110f9f92a6ea4abf2387d29b58b911a05b2c8209765f2&o=&hp=1');

export default handleImage;
