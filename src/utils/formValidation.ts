export const validateLogIn = (values: { email: string; password: string }) => {
  const errors: { email?: string; password?: string } = {};

  if (!values.email) {
    errors.email = "Email is required.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  return errors;
};

export const validateSignUp = (values: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const errors: {
    email?: string;
    password?: string;
    confirmPassword?: string;
  } = {};

  if (!values.email) {
    errors.email = "Email is required.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required.";
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};
