export const isMobile = (value: string): boolean | string => {
  if (/^\d{10}$/.test(value)) {
    return true;
  }
  return "Invalid Mobile Number";
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

export const isTaxId = (value: string): boolean | string => {
  if (/^\d{9}$/.test(value)) {
    return true;
  }
  return "Invalid Tax ID";
};

export const isPasswordMatch = (
  value: string,
  formValues: any
): boolean | string => {
  const { password } = formValues;
  if (password !== value) {
    return "Passwords do not match";
  }
  return true;
};

export const isZipCode = (value: string): boolean | string => {
  if (/^\d{5}$/.test(value)) {
    return true;
  }
  return "Invalid Zip Code";
};

export const isNumber = (value: string): boolean | string => {
  if (/^\d+$/.test(value)) {
    return true;
  }
  return "Invalid Number";
};

export const isWebsite = (value: string): boolean | string => {
  if (
    /^((http|https):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(
      value
    )
  ) {
    return true;
  }
  return "Invalid Website";
};

export const isInstagramPage = (value: string): boolean | string => {
  if (
    /^((http|https):\/\/)?(www.)?instagram.com\/[a-zA-Z0-9_]+\/?$/.test(value)
  ) {
    return true;
  }
  return "Invalid Instagram Page";
};

export const isFacebookPage = (value: string): boolean | string => {
  if (
    /^((http|https):\/\/)?(www.)?facebook.com\/[a-zA-Z0-9_]+\/?$/.test(value)
  ) {
    return true;
  }
  return "Invalid Facebook Page";
};
