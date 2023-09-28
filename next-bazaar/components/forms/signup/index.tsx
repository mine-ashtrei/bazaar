import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  StepIconProps,
  Stack,
} from "@mui/material";
import UserForm from "./userForm";
import BusinessForm from "./businessForm";
import AddressForm from "./addressForm";
import Circle from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleFilled from "@mui/icons-material/Circle";
import SignUpFinish from "./signUpFinish";

export interface SignUpFormData {
  role: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  businessName: string;
  website: string;
  about: string;
  instagramPage: string;
  facebookPage: string;
  constactEmail: string;
  constactNumber: string;
  taxId: string;
  address: string;
  province: string;
  city: string;
  zipCode: string;
}

const CustomStepIcon: React.FC<StepIconProps> = (props) => {
  const { completed, active } = props;

  if (completed) {
    return <CheckCircleIcon color="primary" />;
  }
  if (active) {
    return <CircleFilled color="primary" />;
  }

  return <Circle color="primary" />;
};

export default function SignUpStepper() {
  const steps = [
    "User Information",
    "Business Information",
    "Address Information",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );
  const useFormVar = useForm<SignUpFormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const { getValues, trigger } = useFormVar;

  const validateArrayFunctions = [
    async () => {
      return await trigger(["role", "firstName", "lastName", "mobileNumber"]);
    },
    async () => {
      return await trigger([
        "businessName",
        "website",
        "about",
        "facebookPage",
        "instagramPage",
        "constactEmail",
        "constactNumber",
        "taxId",
      ]);
    },
    async () => {
      return await trigger(["address", "province", "city", "zipCode"]);
    },
  ];

  const handleNext = async () => {
    if (!(await validateArrayFunctions[activeStep]())) {
      return;
    }
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[activeStep] = true;
    setCompletedSteps(newCompletedSteps);

    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      // All data submitted
      console.log(getValues());
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[activeStep] = false;
    newCompletedSteps[activeStep - 1] = false;
    setCompletedSteps(newCompletedSteps);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Stack sx={{ width: isSubmitted ? "600px" : "350px" }} spacing={2}>
      <Stepper activeStep={activeStep}>
        {steps.map((_, index) => (
          <Step completed={completedSteps[index]} key={index}>
            <StepLabel StepIconComponent={CustomStepIcon} />
          </Step>
        ))}
      </Stepper>
      {!isSubmitted && (
        <>
          {activeStep === 0 && <UserForm useFormVar={useFormVar} />}
          {activeStep === 1 && <BusinessForm useFormVar={useFormVar} />}
          {activeStep === 2 && <AddressForm useFormVar={useFormVar} />}
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
}
