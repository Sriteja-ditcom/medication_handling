// Section1.js
import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

const Section1 = ({ formValues, handleRadioChange, disabled }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom style={{ fontWeight: 1000 }}>
         Training and Policy
      </Typography>

      <FormControl component="fieldset">
        <FormLabel>Has the member completed training on the safe handling of medicines?</FormLabel>
        <RadioGroup
          name="trainingCompleted"
          value={formValues.trainingCompleted}
          onChange={handleRadioChange}
          row
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={disabled} />
          <FormControlLabel value="No" control={<Radio />} label="No" disabled={disabled} />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel>Has the member read the medication policy and signed it?</FormLabel>
        <RadioGroup
          name="policyRead"
          value={formValues.policyRead}
          onChange={handleRadioChange}
          row
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={disabled} />
          <FormControlLabel value="No" control={<Radio />} label="No" disabled={disabled} />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel>Does the member know how to access the policy?</FormLabel>
        <RadioGroup
          name="policyAccess"
          value={formValues.policyAccess}
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

export default Section1;
