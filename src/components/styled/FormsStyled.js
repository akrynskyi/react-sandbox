import styled from 'styled-components';

export const Form = styled.form`
  min-width: 400px;
  padding: 25px;
  border: 1px solid #ccc;
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
  margin-bottom: 35px;
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

export const Input = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: all .2s ease-in-out;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 2px solid rgba(81, 203, 238, 1);
  }
`;

export const ControlErrors = styled.div`
  width: 100%;
  min-height: 40px;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  align-items: center;
  background: #ccc;
`;