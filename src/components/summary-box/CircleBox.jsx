import React from 'react';
import { styled, Box } from '@mui/material';

const CircleBox = styled(Box)(({ theme }) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: "#93c47d",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.contrastText,
  fontSize: '24px',
}));

const MyComponent = ({item}) => {
  return (
    <Box>
        <CircleBox>{item.value}</CircleBox>
    </Box>
    );
};

export default MyComponent;
