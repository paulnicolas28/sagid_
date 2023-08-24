import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Button } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

import './form.scss';
import SliderTextFieldForm from './SliderTextFieldForm';
import _ from 'lodash';

import { styled } from '@mui/material/styles';


const StyledRadioGroup = styled(RadioGroup)({
  flexDirection: 'row',
});

const StyledFormControl = styled(FormControl)({
  margin: '1rem',
  minWidth: '120px',
});

const Entretien = ( {currentData, setCurrentData }) => {
  const [selectedOption1, setSelectedOption1] = useState('differencie');
  const [selectedOption2, setSelectedOption2] = useState('lutte');

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };


const handleSliderChange = _.debounce((id, newValue) => {
    const newCurrentData = {...currentData};

    //Calcul pour les indicateurs

    newCurrentData.notes_ecosysteme[0].value = newCurrentData.notes_ecosysteme[0].value_after;
    newCurrentData.notes_ecosysteme[1].value = newCurrentData.notes_ecosysteme[1].value_after;
    newCurrentData.notes_ecosysteme[0].value_after = newValue;
    newCurrentData.notes_ecosysteme[1].value_after = newValue;

    newCurrentData.indicateurs_ecosysteme.forEach(e => {
      const randomValue = Math.floor(Math.random() * 5) + 1;
      e.value = e.value_after;
      e.value_after = randomValue;
    });

    newCurrentData.indicateurs_economiques.forEach(e => {
      const randomValue = Math.floor(Math.random() * 1000) + 1;
      e.value = e.value_after;
      e.value_after = randomValue;
    });

    let sum=0;

    newCurrentData.indicateurs_ges.forEach(e => {
      const randomValue = Math.floor(Math.random() * 1000) + 1;
      e.value = e.value_after;
      e.value_after = randomValue;
      sum+=e.value_after;
    });

    setCurrentData(newCurrentData);
  }, 400);


  return (
    <div className='entretien'>
      <h1>Entretien</h1>

      <h3>Options d'entretien</h3>
      <StyledFormControl component="fieldset">
        <FormLabel component="legend">Fauchage différencié</FormLabel>
        <StyledRadioGroup
          aria-label="Options"
          name="fauchage_differencie"
          value={selectedOption1}
          onChange={handleOption1Change}
        >
          <FormControlLabel value="differencie" control={<Radio />} label="Oui" />
          <FormControlLabel value="non_differencie" control={<Radio />} label="Non" />
        </StyledRadioGroup>

        <FormLabel component="legend">Lutte contre les plantes invasives</FormLabel>
        <StyledRadioGroup
          aria-label="Options"
          name="lutte_plantes_invasives"
          value={selectedOption2}
          onChange={handleOption2Change}
        >
          <FormControlLabel value="lutte" control={<Radio />} label="Oui" />
          <FormControlLabel value="non_lutte" control={<Radio />} label="Non" />
        </StyledRadioGroup>
      </StyledFormControl>

      <h3 component="legend">Type de fauchage</h3>

      <FormLabel component="legend">Fauchage avec collecte (en %)</FormLabel>
      <SliderTextFieldForm id="slider1" onChange={handleSliderChange} />
      <FormLabel component="legend">Fauchage en damier (en %)</FormLabel>
      <SliderTextFieldForm id="slider2" onChange={handleSliderChange} />

      <h3>Valorisation de l'herbe</h3>

      <FormLabel component="legend">Méthanisation (en %)</FormLabel>
      <SliderTextFieldForm id="slider3" onChange={handleSliderChange} />

      <FormLabel component="legend">Compostage (en %)</FormLabel>
      <SliderTextFieldForm id="slider4" onChange={handleSliderChange} />
      
      <FormLabel component="legend">Hauteur de fauche (en cm)</FormLabel>
      <SliderTextFieldForm id="slider5" onChange={handleSliderChange} />
    </div>
  );
};

export default Entretien;
