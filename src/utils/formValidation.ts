export const validateLogIn = (values: { username: string; password: string }) => {
  const errors: { username?: string; password?: string } = {};

  if (!values.username) {
    errors.username = "Username is required.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  return errors;
};

export const validateSignUp = (values: {
  username: string;
  password: string;
  confirmPassword: string;
}) => {
  const errors: {
    username?: string;
    password?: string;
    confirmPassword?: string;
  } = {};

  if (!values.username) {
    errors.username = "Username is required.";
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
