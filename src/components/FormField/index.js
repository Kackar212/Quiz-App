import { Errors, InputContainer, StyledFormField } from "./style";

export default function FormField({ children, errors = [], isCorrectAnswer, ...props }) {
  return (
    <StyledFormField {...props} isCorrectAnswer={isCorrectAnswer}>
      <InputContainer>
        {children}
      </InputContainer>
      <Errors
        role="alert"
        padding={!!errors.length}
      >
        {errors.map((error) => 
          <span key={error}>{error}</span>
        )}
      </Errors>
    </StyledFormField>
  );
}
