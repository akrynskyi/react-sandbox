import is from 'is_js';

export function validateFormControl(control, validators = null) {
  const { 
    value, 
    validation, 
    label, 
    controlName 
  } = control;

  let valid = true;
  let result = {
    valid,
    errors: {}
  };

  if (!Object.keys(validation).length) {
    result = {
      valid,
      errors: {},
    }
  }

  if (validation.required) {
    valid = !!value.trim();

    result = {
      valid,
      errors: valid ? {} : {
        required: '❗ This field can not be empty'
      }
    }
  }

  if (validation.email && value) {
    valid = is.email(value);

    result = {
      valid,
      errors: valid ? {} : {
        email: '❗ Email should be correct email address'
      }
    }
  }

  if (validation.minlenth && value) {
    valid = value.length >= validation.minlenth;

    result = {
      valid,
      errors: valid ? {} : {
        minlenth: `❗ ${label} should be at least ${validation.minlenth} characters, current length is ${value.length}`
      }
    }
  }

  if (validators) {
    validators.forEach(({shouldValidate, validatorFn}) => {
      const controlToValidate = shouldValidate === controlName;

      if (controlToValidate && value) {
        result = validatorFn(control);
      }
    });
  }

  return result;
}

export function validateForm(formControls) {
  let formValid = true;

  for (let control in formControls) {
    if (formControls[control].valid === false) {
      formValid = false;
    }
  }

  return formValid;
}