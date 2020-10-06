import styled from 'styled-components';
import { formWidth } from './vars';

export const Form = styled.form`
  min-width: ${formWidth};
  padding: 25px;
  border: ${({border}) => border ? '1px solid #ccc' : 'none'};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const FormHeader = styled.div`
  font-size: 28px;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 10px;
`;

export const FormBody = styled.div`
  flex-grow: 1;
  margin-bottom: 25px;
`;

export const FormFooter = styled.div`
  margin-bottom: 20px;
`;

export const FormControl = styled.div`
  margin-bottom: 20px;
`;

export const ControlLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const ControlErrors = styled.div`
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  align-items: center;
  background: transparent;
  padding: 0px 4px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  min-height: 40px;
  padding: 5px 10px;
  border-radius: 4px;
  border: ${({invalid}) => invalid ? '2px solid rgb(238, 81, 81)' : '1px solid #ccc'};
  box-shadow: ${({invalid}) => invalid ? '0 0 5px rgb(238, 81, 81)' : 'none'};
  transition: all .2s ease-in-out;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 2px solid rgba(81, 203, 238, 1);
  }
`;