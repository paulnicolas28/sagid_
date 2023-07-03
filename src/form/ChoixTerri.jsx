import React, { useState } from 'react';
import { styled, FormControl, InputLabel, MenuItem, Select, Button, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { data } from '../constants';

import './form.scss';

const StyledFormControl = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '300px',
  margin: 'auto'
});

const StyledButton = styled(Button)({
  marginTop: '1rem'
});

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
}

  return (
    <StyledFormControl className='form'>
      <FormControl>
        <FormLabel>Type</FormLabel>
        <Select
          value={selectedType}
          onChange={handleTypeChange}
        >
          <MenuItem value="region">Région</MenuItem>
          <MenuItem value="department">Département</MenuItem>
        </Select>
      </FormControl>

      {selectedType === 'region' && (
        <FormControl>
          <FormLabel>Région</FormLabel>
          <Select
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region, index) => (
              <MenuItem key={index} value={region.region_name}>
                {region.region_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedType === 'department' && (
        <FormControl>
          <FormLabel>Région</FormLabel>
          <Select
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region, index) => (
              <MenuItem key={index} value={region.region_name}>
                {region.region_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedType === 'department' && selectedRegion && (
        <FormControl>
          <FormLabel>Département</FormLabel>
          <Select
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            {getFilteredDepartments(selectedRegion).map((department, index) => (
              <MenuItem key={index} value={department.num_dep}>
                {department.num_dep + " - " + department.dep_name}
              </MenuItem>
            ))}
          </Select>
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
