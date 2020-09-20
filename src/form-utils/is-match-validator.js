export const isMatchValidator = (control) => (currentControl) => {
  const { value: a, label } = control;
  const { value: b } = currentControl;

  if (a === b) {
    return {
      valid: true,
      errors: {}
    }
  }

  return {
    valid: false,
    errors: {
      isMatch: `❗ ${label}s didn't match`
    }
  }
}