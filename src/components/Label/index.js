import { StyledLabel } from "./style";

export default function Label({ htmlFor, children, ...props }) {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>{children}</StyledLabel>
  );
}