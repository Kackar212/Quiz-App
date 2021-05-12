import { StyledForm } from "./style";

export default function Form({ children, onSubmit, ...props }) {
  return (
    <StyledForm onSubmit={onSubmit} {...props}>
      {children}
    </StyledForm>
  )
}
