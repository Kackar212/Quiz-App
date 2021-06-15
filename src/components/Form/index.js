import { Link } from "react-router-dom";
import { Message, StyledForm } from "./style";

const responseMessages = {
  userExists: 'Taki użytkownik już istnieje!',
  Unauthorized: 'Musisz się zalogować!',
  wrongCredentials: 'Email lub hasło jest nieprawidłowe'
}

export default function Form({ children, onSubmit, errorMessage, successMessage, isSuccess, ...props }) {
  return (
    <StyledForm onSubmit={onSubmit} {...props}>
      <Message role="alert" isSuccess={isSuccess}>
        { isSuccess ? successMessage : responseMessages[errorMessage] }
      </Message>
      {children}
    </StyledForm>
  )
}
