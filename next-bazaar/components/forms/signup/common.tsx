import { useState } from "react";

export interface FormHandles {
  validate: () => boolean;
}

interface FormState {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

const useForm = (initialState: FormState) => {
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

export default useForm;
