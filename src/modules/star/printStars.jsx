/* eslint-disable react/no-array-index-key */
import React from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const printStars = (num) => {
  const totalStars = 5;
  const activeStars = num;

  return (
    <Box>
      {[...new Array(totalStars)].map((arr, index) => (index < activeStars ? (
        <StarIcon key={index} />
      ) : (
        <StarBorderIcon key={index} />
      )))}
    </Box>
  );
};

export default printStars;
