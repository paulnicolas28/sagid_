import React from 'react';
import { styled, Box } from '@mui/material';

const CircleBox = styled(Box)(({ theme, value }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: getColorForValue(value),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.contrastText,
  fontSize: '24px',
}));

// Define a function to map the value to a color
const getColorForValue = (value) => {
  switch (value) {
    case 1:
      return "#FF5733"; // Color for value 1
    case 2:
      return "#FFC300"; // Color for value 2
    case 3:
      return "#93c47d"; // Color for value 3
    case 4:
      return "#3498db"; // Color for value 4
    case 5:
      return "#9b59b6"; // Color for value 5
    default:
      return "#93c47d"; // Default color
  }
};

const MyComponent = ({item}) => {
  return (
    <Box>
        <CircleBox value={item.value}> {item.value} </CircleBox>
    </Box>
    );
};

export default MyComponent;
