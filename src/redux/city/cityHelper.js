const citiesURL = 'https://hotelator.onrender.com/api/v1/cities';

const getAllCitiesAsyc = async () => {
  const response = await fetch(citiesURL);
  const data = await response.json();
  return data;
};

export default getAllCitiesAsyc;
