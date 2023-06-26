import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import { Slider, Typography } from '@mui/material';

import './form.scss';


const StyledSlider = styled(Slider)({
  color: 'primary',
  '& .MuiSlider-track': {
    display: 'none',
  },
});

const StyledFormControl = styled(FormControl)({
  margin: '1rem',
  minWidth: '120px',
});

const StyledButton = styled(Button)({
  marginLeft: '1rem',
});

const Entretien = () => {
  const [selectedOption1, setSelectedOption1] = useState('differencie');
  const [selectedOption2, setSelectedOption2] = useState('lutte');
  const [selectedValue1, setSelectedValue1] = useState('classique');
  const [selectedValue2, setSelectedValue2] = useState('pas_valorisation');

  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleValue1Change = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setSelectedValue2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('selectedOption1', selectedOption1);
    console.log('selectedOption2', selectedOption2);
    console.log('selectedValue1', selectedValue1);
    console.log('selectedValue2', selectedValue2);
    console.log('sliderValue', sliderValue);
  };

  return (
    <div className='entretien'>
      <h1>Entretien</h1>
      <StyledFormControl component="fieldset">
        <FormLabel component="legend">Fauchage différencié</FormLabel>
        <RadioGroup
          aria-label="Options"
          name="fauchage_differencie"
          value={selectedOption1}
          onChange={handleOption1Change}
        >
          <FormControlLabel value="differencie" control={<Radio />} label="Oui" />
          <FormControlLabel value="non_differencie" control={<Radio />} label="Non" />
        </RadioGroup>
      </StyledFormControl>

      <StyledFormControl component="fieldset">
        <FormLabel component="legend">Lutte contre les plantes invasives</FormLabel>
        <RadioGroup
          aria-label="Options"
          name="lutte_plantes_invasives"
          value={selectedOption2}
          onChange={handleOption2Change}
        >
          <FormControlLabel value="lutte" control={<Radio />} label="Oui" />
          <FormControlLabel value="non_lutte" control={<Radio />} label="Non" />
        </RadioGroup>
      </StyledFormControl>

      <StyledFormControl>
      <FormLabel component="legend">Type de fauchage</FormLabel>
        <Select
          value={selectedValue1}
          onChange={handleValue1Change}
          displayEmpty
          inputProps={{ 'aria-label': 'Value 1' }}
        >
          <MenuItem value="classique">
            <em>Fauchage classique</em>
          </MenuItem>
          <MenuItem value="collecte">Fauchage avec collecte</MenuItem>
          <MenuItem value="damier">Fauchage en damier</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl>
      <FormLabel component="legend">Valorisation de l'herbe</FormLabel>
        <Select
          value={selectedValue2}
          onChange={handleValue2Change}
          displayEmpty
          inputProps={{ 'aria-label': 'Value 2' }}
        >
          <MenuItem value="pas_valorisation">
            <em>Pas de Valorisation</em>
          </MenuItem>
          <MenuItem value="methanisation">Méthanisation</MenuItem>
          <MenuItem value="compostage">Compostage</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl>
        <FormLabel component="legend">Hauteur de fauche : {sliderValue} </FormLabel>
      <StyledSlider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-labelledby="slider-label"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={100}
      />
      </StyledFormControl>


      <StyledButton className='submitBtn' variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </StyledButton>
    </div>
  );
};

export default Entretien;