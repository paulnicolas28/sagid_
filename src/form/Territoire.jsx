import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import { Slider, Typography } from '@mui/material';

import "./form.scss";

const Territoire = () => {

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



  const [sliderValue1, setSliderValue1] = useState(50);
  const [sliderValue2, setSliderValue2] = useState(50);
  const [sliderValue3, setSliderValue3] = useState(50);
  const [sliderValue4, setSliderValue4] = useState(50);
  const [sliderValue5, setSliderValue5] = useState(50);
  const [sliderValue6, setSliderValue6] = useState(50);

  const handleSliderChange1 = (event, newValue) => {
    setSliderValue1(newValue);
  };

  const handleSliderChange2 = (event, newValue) => {
    setSliderValue2(newValue);
  };

  const handleSliderChange3 = (event, newValue) => {
    setSliderValue3(newValue);
  };

  const handleSliderChange4 = (event, newValue) => {
    setSliderValue4(newValue);
  };

  const handleSliderChange5 = (event, newValue) => {
    setSliderValue5(newValue);
  };

  const handleSliderChange6 = (event, newValue) => {
    setSliderValue6(newValue);
  };

  return (
    <div className="territoire">
      <h1>Territoire</h1>
      <div className="slider">
        <h3>Réseau routier</h3>

        <StyledFormControl>
          <FormLabel component="legend">
            Linéaire routier : {sliderValue1}{" "}
          </FormLabel>
          <StyledSlider
            value={sliderValue1}
            onChange={handleSliderChange1}
            aria-labelledby="slider-label"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        </StyledFormControl>

        <StyledFormControl>
          <FormLabel component="legend">
            Linéaire de routes nationales : {sliderValue2}{" "}
          </FormLabel>
          <StyledSlider
            value={sliderValue2}
            onChange={handleSliderChange2}
            aria-labelledby="slider-label"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        </StyledFormControl>

        <StyledFormControl>
          <FormLabel component="legend">
            Linéaire routier : {sliderValue3}{" "}
          </FormLabel>
          <StyledSlider
            value={sliderValue3}
            onChange={handleSliderChange3}
            aria-labelledby="slider-label"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        </StyledFormControl>

        <StyledFormControl>
          <FormLabel component="legend">
            Linéaire routier : {sliderValue4}{" "}
          </FormLabel>
          <StyledSlider
            value={sliderValue4}
            onChange={handleSliderChange4}
            aria-labelledby="slider-label"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        </StyledFormControl>

        <StyledFormControl>
          <FormLabel component="legend">
            Linéaire routier : {sliderValue5}{" "}
          </FormLabel>
          <StyledSlider
            value={sliderValue5}
            onChange={handleSliderChange5}
            aria-labelledby="slider-label"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        </StyledFormControl>

        <StyledFormControl>
          <FormLabel component="legend">
            Linéaire routier : {sliderValue6}{" "}
          </FormLabel>
          <StyledSlider
            value={sliderValue6}
            onChange={handleSliderChange6}
            aria-labelledby="slider-label"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={100}
          />
        </StyledFormControl>
      </div>
    </div>
  );
};

export default Territoire;
