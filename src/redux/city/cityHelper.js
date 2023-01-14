const citiesURL = 'https://hotelator.onrender.com/api/cities';

const getAllCitiesAsyc = async () => {
  const response = await fetch(citiesURL);
  const data = await response.json();
  return data;
};

export default getAllCitiesAsyc;
