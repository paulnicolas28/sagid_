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
    newCurrentData.notes_ecosysteme[0].value = newValue;
    newCurrentData.notes_ecosysteme[0].value = newCurrentData.notes_ecosysteme[0].value - 10;
    newCurrentData.notes_ecosysteme[1].value = newValue;
    newCurrentData.notes_ecosysteme[1].value = newCurrentData.notes_ecosysteme[1].value + 10;
    newCurrentData.coutsEconomiques.chartData.data[0] = newValue + 150;
    newCurrentData.coutsEconomiques.chartData.data[1] = newValue + 100;
    newCurrentData.coutsEconomiques.chartData.data[2] = newValue + 200;
    newCurrentData.revenueSummary.chartData.data[0] = newValue + 200;
    newCurrentData.revenueSummary.chartData.data[1] = newValue + 100;
    newCurrentData.revenueSummary.chartData.data[2] = newValue + 250;
    newCurrentData.revenueSummary.chartData.data[3] = newValue + 150;
    newCurrentData.revenueSummary.chartData.data[4] = newValue + 50;





    //Calcul pour le RadarChart

    const aux = newCurrentData.impactEcosysteme[1].chartData.data
    newCurrentData.impactEcosysteme[1].chartData.data = [newValue + 1, newValue + 2, newValue -3, newValue - 4, newValue + 2, newValue -2, newValue -3];
    newCurrentData.impactEcosysteme[0].chartData.data = aux;


    //Calcul pour les indicateurs

    newCurrentData.indicateurs_ecosysteme.forEach(e => {
      e.value = newValue + 1;
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
