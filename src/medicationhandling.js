import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Section1 from "./training";
import Section2 from "./adminstration";
import './style.scss';

const MedicationHandlingForm = () => {
  const [formValues, setFormValues] = useState({
    trainingCompleted: "",
    policyRead: "",
    policyAccess: "",
    handHygiene: "",
    preparation: "",
    firstUserName: "",
    firstUserDate: dayjs(),
    secondUserName: "",
    secondUserDate: dayjs(),
    firstSignatureSubmitted: false,
  });

  const [historicalAssessments, setHistoricalAssessments] = useState([]);
  const [formLocked, setFormLocked] = useState(false);
  const [showHistorical, setShowHistorical] = useState(false);  

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFirstSignatureSubmit = () => {
    setFormLocked(true); 
  };

  const handleSecondSignatureSubmit = () => {
    const updatedAssessments = [...historicalAssessments, { ...formValues }];
    setHistoricalAssessments(updatedAssessments);
    setFormValues({
      trainingCompleted: "",
      policyRead: "",
      policyAccess: "",
      handHygiene: "",
      preparation: "",
      firstUserName: "",
      firstUserDate: dayjs(),
      secondUserName: "",
      secondUserDate: dayjs(),
      firstSignatureSubmitted: false,
    });
    setFormLocked(false);
  };

  const toggleHistoricalAssessments = () => {
    setShowHistorical(!showHistorical); 
  };

  return (
    <Container maxWidth="sm" className="form-container">
     
      <form>
        <Section1
          formValues={formValues}
          handleRadioChange={handleRadioChange}
          disabled={formLocked}
        />

        <Section2
          formValues={formValues}
          handleRadioChange={handleRadioChange}
          disabled={formLocked}
        />

        <Typography variant="h6" gutterBottom style={{ fontWeight: 1000 }}>
signature of all the involved persons in assesment required
        </Typography>

        <Grid container spacing={2} className="signature-section">
          <Grid item xs={12}>
            <TextField
              label="First User Name"
              name="firstUserName"
              value={formValues.firstUserName}
              onChange={handleTextChange}
              fullWidth
              disabled={formLocked}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="First Signature Date"
                value={formValues.firstUserDate}
                onChange={(newDate) =>
                  setFormValues({ ...formValues, firstUserDate: newDate })
                }
                disabled={formLocked}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFirstSignatureSubmit}
              disabled={formLocked}
              className="submit-button"
            >
              Submit First Signature
            </Button>
          </Grid>

          {formLocked && (
            <>
              <Grid item xs={12}>
                <TextField
                  label="Second User Name"
                  name="secondUserName"
                  value={formValues.secondUserName}
                  onChange={handleTextChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Second Signature Date"
                    value={formValues.secondUserDate}
                    onChange={(newDate) =>
                      setFormValues({ ...formValues, secondUserDate: newDate })
                    }
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSecondSignatureSubmit}
                >
                  Submit Second Signature and Archive
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </form>

      <Box mt={4}  className="historical-assessments">
        <Button
          variant="outlined"
          color="primary"
          onClick={toggleHistoricalAssessments}
        >
          {showHistorical
            ? "Hide Historical Assessments"
            : "View Historical Assessments"}
        </Button>
      </Box>

      {showHistorical && (
        <Box mt={4}  className="historical-assessments">
          <Typography variant="h5">Historical Assessments</Typography>
          {historicalAssessments.length === 0 ? (
            <Typography>No assessments archived yet.</Typography>
          ) : (
            historicalAssessments.map((assessment, index) => (
              <Box key={index} mt={2} p={2} border={1} className="assessment-item">
                <Typography variant="subtitle1">
                  Assessment {index + 1}
                </Typography>
                <Typography>
                  First User Name: {assessment.firstUserName}
                </Typography>
                <Typography>
                  First Signature Date:{" "}
                  {dayjs(assessment.firstUserDate).format("DD-MM-YYYY")}
                </Typography>
                <Typography>
                  Second User Name: {assessment.secondUserName}
                </Typography>
                <Typography>
                  Second Signature Date:{" "}
                  {dayjs(assessment.secondUserDate).format("DD-MM-YYYY")}
                </Typography>
              </Box>
            ))
          )}
        </Box>
      )}
    </Container>
  );
};

export default MedicationHandlingForm;
