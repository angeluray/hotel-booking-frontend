const getToday = () => {
  const t = new Date();
  const day = t.getDate() - 1;
  const month = t.getMonth() + 1;
  const year = t.getFullYear();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};

export default getToday;
