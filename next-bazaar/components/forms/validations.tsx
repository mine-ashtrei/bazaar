import { UseFormSetError } from "react-hook-form";

// Check if Mobile number is valid
export const isMobile = (
  fieldName: string,
  value: string,
  setError: UseFormSetError<any>
): boolean => {
  if (/^\d{10}$/.test(value)) {
    return true;
  }
  setError(fieldName, { message: "Invalid Mobile Number" });
  return false;
};

export const isEmail = (value: string): boolean | string => {
  if (/^\S+@\S+\.\S+$/.test(value)) {
    return true;
  }
  return "Invalid Email";
};

export const isPassword = (value: string): boolean | string => {
  // Has at least one lowercase letter.
  // Has at least one uppercase letter.
  // Has at least one digit.
  // Has at least one special character from @$!%*?&.
  // Is at least 8 characters long.
  // Consists only of allowed characters (alphanumeric and the specific special characters)
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      value
    )
  ) {
    return true;
  }
  return "Invalid Password";
};
