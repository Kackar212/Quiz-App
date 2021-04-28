import { StyledFormField } from "./style";

export default function FormField({ children }) {
  return (
    <StyledFormField>
      {children}
      <div role="alert"></div>
    </StyledFormField>
  );
}
