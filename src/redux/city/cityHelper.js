const citiesURL = 'http://127.0.0.1:4000/api/v1/cities';

const getAllCitiesAsyc = async () => {
  const response = await fetch(citiesURL);
  const data = await response.json();
  return data;
};

export default getAllCitiesAsyc;
