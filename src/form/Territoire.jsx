import React, { useState } from 'react';
import SliderTextFieldForm from './SliderTextFieldForm';

import "./form.scss";
import { FormLabel } from '@mui/material';

const Territoire = () => {

  return (
    <div className="territoire">
      <h1>Territoire</h1>
        <h3>Réseau routier</h3>

        <FormLabel component="legend">Longueur de réseau routier (en km)</FormLabel>
        <SliderTextFieldForm label="Longueur de réseau routier" unit="km" />



      </div>
  );
};

export default Territoire;
