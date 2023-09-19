import React, { useRef, useState } from "react";
import { Stepper, Step, StepLabel, Button, Box, Stack } from "@mui/material";

import UserForm from "./userForm";

import { StepIconProps } from "@mui/material/StepIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleFilled from "@mui/icons-material/Circle";
import Circle from "@mui/icons-material/CircleOutlined";
import { FormHandles, FormState } from "./common";
import BusinessForm from "./businessForm";
import AddressForm from "./addressForm";
import SignUpFinish from "./signUpFinish";

const CustomStepIcon: React.FC<StepIconProps> = (props) => {
  const { completed, active } = props;
  console.log("Step Icon State:", { completed, active }); // Debugging line

  if (completed) {
    return <CheckCircleIcon color="primary" />;
  }
  if (active) {
    return <CircleFilled color="primary" />;
  }

  return <Circle color="primary" />;
};

const steps = ["", "", ""];

const SignUpStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [collectedData, setCollectedData] = useState<FormState>();
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<FormHandles | null>(null);

  const setStep = (value: boolean) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[activeStep] = value;
    console.log(newCompletedSteps);
    setCompletedSteps(newCompletedSteps);
  };

  const handleNext = () => {
    if (!formRef.current) {
      return;
    }

    setCollectedData((prev) => ({ ...prev, ...formRef.current?.getData() }));
    if (formRef.current.validate()) {
      setStep(true);
      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1);
      } else {
        // All steps completed - submit the data
        // take the last collectedData
        const data = {
          ...formRef.current?.getData(),
          ...collectedData,
        };
        console.log("Submitting data:", data);
        // Make your API call here
        setIsSubmitted(true);
      }
    }
  };

  const handleBack = () => {
    setStep(false);
    setActiveStep((prev) => prev - 1);
    // also set collected data to come back to something completed
    setCollectedData((prev) => ({ ...prev, ...formRef.current?.getData() }));
  };

  return (
    <Stack
      justifyContent={!isSubmitted ? "space-between" : "flex-start"}
      spacing={2}
      sx={{ width: "100%" }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((_, index) => (
          <Step completed={completedSteps[index]} key={index}>
            <StepLabel StepIconComponent={CustomStepIcon} />
          </Step>
        ))}
      </Stepper>

      {!isSubmitted && (
        <>
          <Box flexGrow={1}>
            {activeStep === 0 && (
              <UserForm ref={formRef} initialState={collectedData} />
            )}
            {activeStep === 1 && (
              <BusinessForm ref={formRef} initialState={collectedData} />
            )}
            {activeStep === 2 && (
              <AddressForm ref={formRef} initialState={collectedData} />
            )}
          </Box>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Stack>
        </>
      )}
      {isSubmitted && <SignUpFinish />}
    </Stack>
  );
};

export default SignUpStepper;
