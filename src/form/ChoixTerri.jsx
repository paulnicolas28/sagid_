import React, { useState } from 'react';
import { styled, FormControl, InputLabel, MenuItem, Select, Button, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { data } from '../constants';

import './form.scss';

const StyledFormControl = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem', // Increase the gap for a cuter look
  maxWidth: '600px', // Adjust the maximum width as needed
  margin: 'auto',
  minHeight: '60vh', // Adjust the height as needed
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '1.5rem', // Increase the top margin for a better look
  borderRadius: '5px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  width: '300px',
  padding: '10px', // Adjust the padding as needed
  borderRadius: '5px',
  backgroundColor: theme.palette.background.paper,
  '& .MuiSelect-select': {
    paddingRight: '30px', // Increase the right padding for wider Select components
  },
}));

var regions = data.regions;

function ChoixTerri() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedRegion('');
    setSelectedDepartment('');
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedDepartment('');
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const getFilteredDepartments = (regionName) => {
    const region = regions.find((region) => region.region_name === regionName);
    return region ? region.departments : [];
  };

  const navigate = useNavigate();

  const redirectToPlan = () => {   
    navigate("/plan"); // Replace '/other-page' with the desired URL or path
  };

  return (
    <StyledFormControl className='form'>
      <FormControl>
        <FormLabel>Type</FormLabel>
        <StyledSelect
          value={selectedType}
          onChange={handleTypeChange}
          label="Type"
        >
          <MenuItem value="region">Région</MenuItem>
          <MenuItem value="department">Département</MenuItem>
        </StyledSelect>
      </FormControl>

      {selectedType === 'region' && (
        <FormControl>
          <FormLabel>Région</FormLabel>
          <StyledSelect
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region, index) => (
              <MenuItem key={index} value={region.region_name}>
                {region.region_name}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      )}

      {selectedType === 'department' && (
        <FormControl>
          <FormLabel>Région</FormLabel>
          <StyledSelect
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region, index) => (
              <MenuItem key={index} value={region.region_name}>
                {region.region_name}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      )}

      {selectedType === 'department' && selectedRegion && (
        <FormControl>
          <FormLabel>Département</FormLabel>
          <StyledSelect
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            {getFilteredDepartments(selectedRegion).map((department, index) => (
              <MenuItem key={index} value={department.num_dep}>
                {department.num_dep + ' - ' + department.dep_name}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
      )}

      <StyledButton
        variant="contained"
        color="primary"
        onClick={redirectToPlan}
        disabled={!selectedType || (!selectedRegion && !selectedDepartment)}
      >
        Valider
      </StyledButton>
    </StyledFormControl>
  );
}

export default ChoixTerri;
