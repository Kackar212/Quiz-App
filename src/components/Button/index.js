import Loader from "../Loader";
import { SrOnly, StyledButton } from "./style";

export default function Button({ children, srOnly, isLoading, disabled, ...props }) {
    return (
        <StyledButton hasIcon={!!srOnly} disabled={isLoading || disabled} {...props}>
            { !!srOnly && <SrOnly>{ srOnly }</SrOnly> }
            { isLoading ? <>{children}<Loader scale={0.6}/></> : children }
        </StyledButton>
    );
}