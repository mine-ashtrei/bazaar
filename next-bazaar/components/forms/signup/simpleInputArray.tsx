import React, { forwardRef, useImperativeHandle } from "react";
import { useForm, validateForm, InputDefinition } from "./common";
import SimpleInput from "./simpleInput";

type SimpleFormProps = {
  inputs: InputDefinition[];
};

// Define props for the UserForm component
const SimpleInputArray = forwardRef<any, SimpleFormProps>((props, ref) => {
  const inputs = props.inputs;
  const { data, errors, setErrors, handleChange } = useForm(inputs);

  // Expose the validate method for use with ref in the parent
  useImperativeHandle(ref, () => ({
    validate: () => validateForm(data, inputs, setErrors),
  }));

  return (
    <>
      {inputs.map((input, index) => (
        <SimpleInput
          key={index}
          input={input}
          data={data}
          errors={errors}
          handleChange={handleChange}
        />
      ))}
    </>
  );
});

SimpleInputArray.displayName = "SimpleForm";

export default SimpleInputArray;
