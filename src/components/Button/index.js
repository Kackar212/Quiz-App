import { SrOnly, StyledButton } from "./style";

export default function Button({ children, srOnly, ...props }) {
    return (
        <StyledButton hasIcon={!!srOnly} {...props}>
            { !!srOnly && <SrOnly>{ srOnly }</SrOnly> }
            { children }
        </StyledButton>
    );
}