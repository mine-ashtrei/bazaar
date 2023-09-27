// import React, {
//   forwardRef,
//   useEffect,
//   useImperativeHandle,
//   useState,
// } from "react";
// import {
//   FormHandles,
//   SimpleFormProps,
//   InputDefinition,
//   useForm,
//   validateForm,
// } from "./common";
// import { isMobileNumber, isPassword, notEmpty } from "../validations";
// import {
//   Alert,
//   Box,
//   Divider,
//   Stack,
//   ToggleButton,
//   ToggleButtonGroup,
//   Typography,
//   styled,
//   useTheme,
// } from "@mui/material";
// import SimpleInput from "./simpleInput";

// // Define props for the UserForm component
// const EmailPassForm = forwardRef<FormHandles, SimpleFormProps>((props, ref) => {
//   const inputs: InputDefinition[] = [
//     {
//       key: "email",
//       label: "Email",
//       validation: [notEmpty],
//     },
//     {
//       key: "password",
//       label: "password",
//       validation: [notEmpty, isPassword],
//     },
//     {
//       key: "password1",
//       label: "password",
//       validation: [notEmpty, isPassword],
//     },
//   ];
//   const theme = useTheme();

//   const { data, errors, setErrors, handleChange } = useForm(
//     inputs,
//     props.initialState
//   );
//   let initialAccountType = "";
//   if (props.initialState && props.initialState["accountType"]) {
//     initialAccountType = props.initialState["accountType"];
//   }

//   // Expose the validate method for use with ref in the parent
//   useImperativeHandle(ref, () => ({
//     validate: () => {
//       if (data["password"] !== data["password1"]) {
//         const newErrors = { ...errors };
//         newErrors["password1"] = "Passwords do not match";
//         setErrors(newErrors);
//         return false;
//       }
//       return validateForm(data, inputs, setErrors);
//     },
//     getData: () => {
//       // try and delete this
//       data.delete("password1");
//       return data;
//     },
//   }));

//   return (
//     <Stack spacing={4}>
//       <Typography alignSelf={"center"} variant="h4">
//         Let’s create an account!
//       </Typography>
//       <Divider />
//       <Stack spacing={2}>
//         <Typography variant="h5"> Tell us a little bit about you.</Typography>
//         <Stack spacing={2}>
//           {inputs.map((input, index) => (
//             <SimpleInput
//               sx={{ width: "100%" }}
//               key={index}
//               input={input}
//               data={data}
//               errors={errors}
//               handleChange={handleChange}
//             />
//           ))}
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// });

// EmailPassForm.displayName = "EmailPassForm";

// export default EmailPassForm;
