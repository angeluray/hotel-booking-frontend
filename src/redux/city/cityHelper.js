const citiesURL = 'https://hotelzilla-api.herokuapp.com/api/cities';

const getAllCitiesAsyc = async () => {
  const response = await fetch(citiesURL);
  const data = await response.json();
  return data;
};

export default getAllCitiesAsyc;
