// Section2.js
import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import './style.scss'

const Section2 = ({ formValues, handleRadioChange, disabled }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom style={{ fontWeight: 1000 }}>
        Administration of Medicines
      </Typography>

      <FormControl component="fieldset">
        <FormLabel>Did the staff wash hands before administering medication?</FormLabel>
        <RadioGroup
          name="handHygiene"
          value={formValues.handHygiene}
          onChange={handleRadioChange}
          row
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={disabled} />
          <FormControlLabel value="No" control={<Radio />} label="No" disabled={disabled} />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel>Was everything properly prepared before starting?</FormLabel>
        <RadioGroup
          name="preparation"
          value={formValues.preparation}
          onChange={handleRadioChange}
          row
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={disabled} />
          <FormControlLabel value="No" control={<Radio />} label="No" disabled={disabled} />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Section2;
