import React, { useState } from 'react';
import SliderTextFieldForm from './SliderTextFieldForm';
import ChoixBord from './ChoixBord';

import "./form.scss";
import { FormLabel } from '@mui/material';

const Territoire = () => {

  const handleSliderChange = (id, newValue) => {
    console.log(id, newValue);
  };


  return (
    <div className="territoire">
      <h1>Territoire</h1>
        <h3>Réseau routier</h3>
        <FormLabel component="legend">Longueur de réseau routier (en km)</FormLabel>
        <SliderTextFieldForm id="slider6" onChange={handleSliderChange} label="Longueur de réseau routier" unit="km" />
        <h3>Type de Bord de Route</h3>
        <ChoixBord />
      </div>
  );
};

export default Territoire;
