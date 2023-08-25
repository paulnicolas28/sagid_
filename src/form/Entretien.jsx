import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Button } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

import './form.scss';
import SliderTextFieldForm from './SliderTextFieldForm';
import _, { set } from 'lodash';

import { styled } from '@mui/material/styles';


const StyledRadioGroup = styled(RadioGroup)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1rem',
});

const StyledFormControl = styled(FormControl)({
  margin: '1rem',
  minWidth: '120px',
  maxWidth: '300px',
  width: '100%',
  '& .MuiFormLabel-root': {
    marginBottom: '0.5rem',
  },
});

const Entretien = ( {currentData, setCurrentData, setVisible }) => {

// Initialize state variables for selected options with default values
const [selectedOption1, setSelectedOption1] = useState('differencie'); // Default value is 'differencie'
const [selectedOption2, setSelectedOption2] = useState('lutte'); // Default value is 'lutte'


// This function handles changes in Option 1 selection
const handleOption1Change = _.debounce((event) => {
  // Update the selected option with the value from the event
  setSelectedOption1(event.target.value);
  
  // Create a copy of the current data
  const newCurrentData = { ...currentData };

  // Update values in the 'indicateurs_ecosysteme' array with random values
  newCurrentData.indicateurs_ecosysteme.forEach(e => {
    const randomValue = Math.floor(Math.random() * 5) + 1;
    e.value = e.value_after;
    e.value_after = randomValue;
  });

  // Update the current data with the modified copy
  setCurrentData(newCurrentData);

  // Set the 'visible' state to true
  setVisible(true);
}, 400);

// This function handles changes in Option 2 selection
const handleOption2Change = _.debounce((event) => {
  // Update the selected option with the value from the event
  setSelectedOption2(event.target.value);

  // Create a copy of the current data
  const newCurrentData = { ...currentData };

  // Update values in the 'indicateurs_ecosysteme' array with random values
  newCurrentData.indicateurs_ecosysteme.forEach(e => {
    const randomValue = Math.floor(Math.random() * 5) + 1;
    e.value = e.value_after;
    e.value_after = randomValue;
  });

  // Update the current data with the modified copy
  setCurrentData(newCurrentData);

  // Set the 'visible' state to true
  setVisible(true);
}, 400);

// This function handles changes in a slider
const handleSliderChange = _.debounce((id, newValue) => {
  // Create a copy of the current data
  const newCurrentData = { ...currentData };

  // Update values in the 'notes_ecosysteme' array based on the slider's new value
  newCurrentData.notes_ecosysteme[0].value = newCurrentData.notes_ecosysteme[0].value_after;
  newCurrentData.notes_ecosysteme[1].value = newCurrentData.notes_ecosysteme[1].value_after;
  newCurrentData.notes_ecosysteme[0].value_after = newValue;
  newCurrentData.notes_ecosysteme[1].value_after = newValue;

  // Update values in the 'indicateurs_ecosysteme' array with random values
  newCurrentData.indicateurs_ecosysteme.forEach(e => {
    const randomValue = Math.floor(Math.random() * 5) + 1;
    e.value = e.value_after;
    e.value_after = randomValue;
  });

  // Update values in the 'indicateurs_economiques' array with random values
  newCurrentData.indicateurs_economiques.forEach(e => {
    const randomValue = Math.floor(Math.random() * 1000) + 1;
    e.value = e.value_after;
    e.value_after = randomValue;
  });

  let sum = 0;

  // Update values in the 'indicateurs_ges' array with random values and calculate their sum
  newCurrentData.indicateurs_ges.forEach(e => {
    const randomValue = Math.floor(Math.random() * 1000) + 1;
    e.value = e.value_after;
    e.value_after = randomValue;
    sum += e.value_after;
  });

  // Update the current data with the modified copy
  setCurrentData(newCurrentData);

  // Set the 'visible' state to true
  setVisible(true);
}, 400);


  // const handleFormSubmit = _.debounce((id, newValue) => {
  //   // Handle form submission logic here
  //   // Update formData based on selectedOption1, selectedOption2, and slider values

  //   const newCurrentData = { ...currentData };

  //   // Handle selectedOption1 and selectedOption2 changes
  //   if (selectedOption1 === 'differencie') {
  //     // Update newCurrentData based on 'differencie' option
  //   } else {
  //     // Update newCurrentData based on 'non_differencie' option
  //   }

  //   if (selectedOption2 === 'lutte') {
  //     // Update newCurrentData based on 'lutte' option
  //   } else {
  //     // Update newCurrentData based on 'non_lutte' option
  //   }

  //   // Handle slider changes
  //       //Calcul pour les indicateurs

  //       newCurrentData.notes_ecosysteme[0].value = newCurrentData.notes_ecosysteme[0].value_after;
  //       newCurrentData.notes_ecosysteme[1].value = newCurrentData.notes_ecosysteme[1].value_after;
  //       newCurrentData.notes_ecosysteme[0].value_after = newValue;
  //       newCurrentData.notes_ecosysteme[1].value_after = newValue;
    
  //       newCurrentData.indicateurs_ecosysteme.forEach(e => {
  //         const randomValue = Math.floor(Math.random() * 5) + 1;
  //         e.value = e.value_after;
  //         e.value_after = randomValue;
  //       });
    
  //       newCurrentData.indicateurs_economiques.forEach(e => {
  //         const randomValue = Math.floor(Math.random() * 1000) + 1;
  //         e.value = e.value_after;
  //         e.value_after = randomValue;
  //       });
    
  //       let sum=0;
    
  //       newCurrentData.indicateurs_ges.forEach(e => {
  //         const randomValue = Math.floor(Math.random() * 1000) + 1;
  //         e.value = e.value_after;
  //         e.value_after = randomValue;
  //         sum+=e.value_after;
  //       });
    
  //       setCurrentData(newCurrentData);
  //       setVisible(true);

  //   // Calculate values and update newCurrentData as needed
  //     }, 400);


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
      <SliderTextFieldForm id="slider1" onChange={handleSliderChange}/>

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
