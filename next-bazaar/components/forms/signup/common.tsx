import { useState } from "react";
import { ValidationParams } from "../validations";

export interface FormHandles {
  validate: () => boolean;
}

export interface InputDefinition {
  label: string;
  validation: ((params: ValidationParams) => string)[];
  key: string;
}

interface FormState {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

export const validateForm = (
  state: FormState,
  inputs: InputDefinition[],
  setErrors: (value: React.SetStateAction<FormErrors>) => void
): boolean => {
  let valid = true;
  const newErrors: any = {};
  for (const input of inputs) {
    for (const validation of input.validation) {
      const error = validation({
        value: state[input.key],
        fieldName: input.label,
      });
      if (error) {
        valid = false;
        newErrors[input.key] = error;
        break;
      }
    }
    if (valid) {
      newErrors[input.key] = "";
    }
  }
  setErrors(newErrors);
  return valid;
};

export const useForm = (inputs: InputDefinition[]) => {
  const initialState = inputs.reduce((acc, input) => {
    acc[input.key] = "";
    return acc;
  }, {} as Record<string, string>);
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear any existing error for the field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return { data, setData, errors, setErrors, handleChange };
};
