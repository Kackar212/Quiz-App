import { StyledInput } from "./style";

export default function Input({ type, name, id, ...props }) {
  return <StyledInput type={type} name={name} id={id} {...props} />
}