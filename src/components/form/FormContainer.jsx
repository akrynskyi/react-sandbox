import React from 'react';
import { 
  getFormValue, 
  validateForm, 
  validateFormControl 
} from '.';

import { FormInput } from './FormInput';
import {
  Form,
  FormHeader,
  FormBody,
  FormFooter,
  Button,
} from '../styled';

export const FormContainer = (props) => {
  const { 
    onFormSubmit,
    formTitle,
    buttonTitle,
    formValid,
    formControls,
    onControlChange,
  } = props;

  const onSubmit = (formControls) => {
    return (e) => {
      e.preventDefault();
      const formValue = getFormValue(formControls);
      onFormSubmit(formValue);
    }
  }

  const handleControlChange = (controlName, formControls) => {
    return ({ target }) => {
      const { value } = target;
      const updatedFormControls = {...formControls};
      const formControl = updatedFormControls[controlName];
      const { valid, errors } = validateFormControl({...formControl, controlName, value});

      const updatedFormControl = {
        ...formControl,
        dirty: true,
        value,
        valid,
        errors,
      };

      updatedFormControls[controlName] = updatedFormControl;
      const formValid = validateForm(updatedFormControls);

      onControlChange({
        formValid,
        formControls: updatedFormControls,
      });
    }
  }

  return (
    <Form onSubmit={onSubmit(formControls)}>
      <FormHeader>
        {formTitle}
      </FormHeader>
      <FormBody>
        {
          Object
            .keys(formControls)
            .map((controlName) => (
              <FormInput 
                {...formControls[controlName]}
                key={controlName}
                onChange={handleControlChange(controlName, formControls)}
              />
            ))
        }
      </FormBody>
      <FormFooter>
        <Button
          formBtn
          disabled={!formValid}
        >
          {buttonTitle}
        </Button>
      </FormFooter>
    </Form>
  );
};