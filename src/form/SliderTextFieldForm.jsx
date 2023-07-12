import React, { useState } from "react";
import { TextField, Slider, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

import {data } from '../constants'

const StyledSlider = styled(Slider)({
  marginLeft: "1rem",
  color: "primary",
  "& .MuiSlider-track": {
    display: "none",
  },
});

const StyledNumberInput = styled(TextField)(({ theme }) => ({
  width: "100px",
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.dark,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.dark,
    },
  },
}));

const StyledFormControl = styled(FormControl)({
  margin: "1rem",
  minWidth: "120px",
});

const SliderTextFieldForm = ({ id, onChange }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [textFieldValue, setTextFieldValue] = useState("0");

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setTextFieldValue(newValue.toString());
    onChange(id, newValue);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      setSliderValue(parsedValue);
      onChange(id, parsedValue);
    }
  };

  return (
      <div className="row">
        <div className="col-6">
          <StyledFormControl>
            <StyledNumberInput
              type="number"
              value={textFieldValue}
              onChange={handleTextFieldChange}
              variant="outlined"
            />
          </StyledFormControl>
        </div>
        <div className="col-6">
          <StyledFormControl>
            <StyledSlider
              value={sliderValue}
              onChange={handleSliderChange}
              min={0}
              max={100}
              step={1}
            />
          </StyledFormControl>
        </div>
      </div>
  );
};

export default SliderTextFieldForm;
