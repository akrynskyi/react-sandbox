import React from 'react';

import {
  FormControl, 
  ControlLabel, 
  Input, 
  ControlErrors,
} from '../styled';

export const InputField = (props) => {
  const { 
    label, 
    type,
    value,
    dirty,
    valid,
    errors,
    onChange
  } = props;

  const hasErrors = Object.keys(errors).length;
  const isInvalid = !valid && dirty;

  return (
    <FormControl>
      <ControlLabel>
        {label}
      </ControlLabel>
      <Input 
        type={type || 'text'}
        onChange={onChange}
        value={value}
        invalid={isInvalid}
      />
      {
        hasErrors
        ? <ControlErrors>
            {Object.values(errors)}
          </ControlErrors>
        : null
      }
    </FormControl>
  );
};