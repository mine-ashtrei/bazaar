// NEVER USED MAYBE IN THE FUTURE

// import { ReactNode, useState } from "react";
// import { UseFormReturn, useForm } from "react-hook-form";
// import {
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
//   StepIconProps,
//   Stack,
// } from "@mui/material";
// import Circle from "@mui/icons-material/CircleOutlined";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CircleFilled from "@mui/icons-material/Circle";
// import { SignUpFormData } from "../signup";
// import React from "react";

// type AshStep = {
//   Step: React.FC<{ useFormVar: UseFormReturn }>;
//   validation: () => Promise<boolean>;
// };

// const CustomStepIcon: React.FC<StepIconProps> = (props) => {
//   const { completed, active } = props;

//   if (completed) {
//     return <CheckCircleIcon color="primary" />;
//   }
//   if (active) {
//     return <CircleFilled color="primary" />;
//   }

//   return <Circle color="primary" />;
// };

// const AshStepper = ({
//   useFormVar,
//   ashSteps,
//   onSubmit,
// }: {
//   useFormVar: UseFormReturn;
//   ashSteps: AshStep[];
//   onSubmit: () => void;
// }) => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [completedSteps, setCompletedSteps] = useState<boolean[]>(
//     new Array(ashSteps.length).fill(false)
//   );

//   const { getValues } = useFormVar;

//   const handleNext = async () => {
//     if (!(await ashSteps[activeStep].validation())) {
//       return;
//     }
//     const newCompletedSteps = [...completedSteps];
//     newCompletedSteps[activeStep] = true;
//     setCompletedSteps(newCompletedSteps);

//     if (activeStep < ashSteps.length - 1) {
//       setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     } else {
//       // All data submitted
//       console.log(getValues());
//       setIsSubmitted(true);
//       onSubmit();
//     }
//   };

//   const handleBack = () => {
//     const newCompletedSteps = [...completedSteps];
//     newCompletedSteps[activeStep] = false;
//     newCompletedSteps[activeStep - 1] = false;
//     setCompletedSteps(newCompletedSteps);
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <Stack sx={{ width: isSubmitted ? "600px" : "350px" }} spacing={2}>
//       <Stepper activeStep={activeStep}>
//         {ashSteps.map((_, index) => (
//           <Step completed={completedSteps[index]} key={index}>
//             <StepLabel StepIconComponent={CustomStepIcon} />
//           </Step>
//         ))}
//       </Stepper>
//       {!isSubmitted && (
//         <>
//           {ashSteps.map((ashStep, index) => {
//             const Step = ashStep.Step;
//             return <Step key={index} useFormVar={useFormVar} />;
//           })}
//           <Stack direction={"row"} justifyContent={"space-between"}>
//             <Button disabled={activeStep === 0} onClick={handleBack}>
//               Back
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleNext}>
//               {activeStep === ashSteps.length - 1 ? "Finish" : "Next"}
//             </Button>
//           </Stack>
//         </>
//       )}
//       {isSubmitted && <></>}
//     </Stack>
//   );
// };

// export default AshStepper;
