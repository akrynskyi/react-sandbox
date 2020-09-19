export function validateForm(formControls) {
  let formValid = true;

  for (let control in formControls) {
    if (formControls[control].valid === false) {
      formValid = false;
    }
  }

  return formValid;
}