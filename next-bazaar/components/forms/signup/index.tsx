import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Box, Stack } from "@mui/material";

import UserForm from "./userForm";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const SignUpStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  const handleNext = (data: any) => {
    setCollectedData((prev) => ({ ...prev, ...data }));
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      // All steps completed - submit the data
      console.log("Submitting data:", collectedData);
      // Make your API call here
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box flexGrow={1}>
        {activeStep === 0 && <UserForm onSubmit={handleNext} />}
        {activeStep === 1 && <UserForm onSubmit={handleNext} />}
        {activeStep === 2 && <UserForm onSubmit={handleNext} />}
        {activeStep === 3 && <UserForm onSubmit={handleNext} />}
      </Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default SignUpStepper;
