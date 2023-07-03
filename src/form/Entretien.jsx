import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';

import './form.scss';

import SliderTextFieldForm from './SliderTextFieldForm';

const StyledRadioGroup = styled(RadioGroup)({
  flexDirection: 'row',
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

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('selectedOption1', selectedOption1);
    console.log('selectedOption2', selectedOption2);

    console.log('submit');
  };

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
      <SliderTextFieldForm />
      <FormLabel component="legend">Fauchage en damier (en %)</FormLabel>
      <SliderTextFieldForm />

      <h3>Valorisation de l'herbe</h3>

      <FormLabel component="legend">Méthanisation (en %)</FormLabel>
      <SliderTextFieldForm />

      <FormLabel component="legend">Compostage (en %)</FormLabel>
      <SliderTextFieldForm />
      
      <FormLabel component="legend">Hauteur de fauche (en cm)</FormLabel>
      <SliderTextFieldForm />


      <StyledButton className='submitBtn' variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </StyledButton>
    </div>
  );
};

export default Entretien;