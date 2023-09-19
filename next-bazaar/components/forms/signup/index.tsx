import React, { useRef, useState } from "react";
import { Stepper, Step, StepLabel, Button, Box, Stack } from "@mui/material";

import UserForm from "./userForm";

import { StepIconProps } from "@mui/material/StepIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleFilled from "@mui/icons-material/Circle";
import Circle from "@mui/icons-material/CircleOutlined";
import { FormHandles } from "./common";
import BusinessForm from "./businessForm";
import AddressForm from "./addressForm";

const CustomStepIcon: React.FC<StepIconProps> = (props) => {
  const { completed, active } = props;
  if (active) {
    return <CircleFilled color="primary" />;
  }
  if (completed) {
    return <CheckCircleIcon color="primary" />;
  }

  return <Circle color="primary" />;
};

const steps = ["", "", "", ""];

const SignUpStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  const formRef = useRef<FormHandles | null>(null);

  const handleNext = (data: any) => {
    console.log(data);
    setCollectedData((prev) => ({ ...prev, ...data }));
    if (formRef.current && formRef.current.validate()) {
      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1);
      } else {
        // All steps completed - submit the data
        console.log("Submitting data:", collectedData);
        // Make your API call here
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Stack justifyContent={"space-between"} spacing={2} sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((_, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={CustomStepIcon} />
          </Step>
        ))}
      </Stepper>
      <Box flexGrow={1}>
        {activeStep === 0 && <UserForm ref={formRef} onSubmit={handleNext} />}
        {activeStep === 1 && (
          <BusinessForm ref={formRef} onSubmit={handleNext} />
        )}
        {activeStep === 2 && (
          <AddressForm ref={formRef} onSubmit={handleNext} />
        )}
        {activeStep === 3 && <UserForm ref={formRef} onSubmit={handleNext} />}
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
