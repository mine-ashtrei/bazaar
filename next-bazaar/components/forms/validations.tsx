export interface ValidationParams {
  fieldName: string;
  value: string;
}

export const notEmpty = ({ fieldName, value }: ValidationParams): string => {
  if (!value || value.length == 0) {
    return `${fieldName} is required`;
  }
  return "";
};

// Check if the value is a valid Mobile Number
export const isMobileNumber = ({
  fieldName,
  value,
}: ValidationParams): string => {
  if (/^[0-9]{10}$/.test(value)) {
    return "";
  }
  return "Invalid Mobile Number";
};

// Check if the value is a valid Email
export const isEmail = ({ fieldName, value }: ValidationParams): string => {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "";
  }
  return "Invalid Email";
};

// Check if the value is a valid Password
export const isPassword = ({ fieldName, value }: ValidationParams): string => {
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
    return "";
  }
  return "Invalid Password";
};

export const isUrl = ({ fieldName, value }: ValidationParams): string => {
  try {
    const newUrl = new URL(value);
    const httpType =
      newUrl.protocol === "http:" || newUrl.protocol === "https:";
    return "";
  } catch (err) {
    return "Invalid URL";
  }
};

export const isInstagramUrl = ({
  fieldName,
  value,
}: ValidationParams): string => {
  if (value.startsWith("https://www.instagram.com/")) {
    return "";
  }
  return "Invalid Instagram URL";
};

export const isFacebookUrl = ({
  fieldName,
  value,
}: ValidationParams): string => {
  if (value.startsWith("https://www.facebook.com/")) {
    return "";
  }
  return "Invalid Facebook URL";
};
