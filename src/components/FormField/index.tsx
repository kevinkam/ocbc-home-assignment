import React from "react";
import { Alert, Wrapper } from "./styled";

interface FormFieldProps {
  label: string;
  name: string;
  errorMessage?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  errorMessage,
  children,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      {children}
      {!!errorMessage && <Alert role="alert">{errorMessage}</Alert>}
    </Wrapper>
  );
};

export default FormField;
