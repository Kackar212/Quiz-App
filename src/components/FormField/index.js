import { StyledFormField } from "./style";

export default function FormField({ children }) {
  return (
    <StyledFormField>
      {children}
      <div class="field__errors" role="alert"></div>
    </StyledFormField>
  );
}
