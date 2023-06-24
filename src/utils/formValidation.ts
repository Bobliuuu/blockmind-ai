export const validateLogIn = (values: { email: string; password: string }) => {
  const errors: { email?: string; password?: string } = {};

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};
