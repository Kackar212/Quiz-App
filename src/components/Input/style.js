import styled, { css } from "styled-components";

const styleForCheckbox = css`
    box-shadow: none;
    position: absolute;
    left: -9999px;

    & + label {
        color: #222;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: .725em;
        padding-left: 8px;
        position: static;
        padding: 5px;
    }

    & + label span::after {
        transition: transform .3s;
    }

    &:checked + label span::after {
        transform: translateY(calc(-100% - 2px));
    }
`

const labelOnFocus = css`
    transform: translateY(-65%);
    top: 1px;
    transition: transform .3s;
    font-size: .875em;
`

export const StyledInput = styled.input`
    border: ${({ border }) => border || "1px solid rgb(0 0 0 / 20%)"};
    padding: 10px 8px;
    width: 100%;
    line-height: 1.8;
    border-radius: 0;
    
    & + label {
        transition: transform .3s;
    }

    &:not([type="checkbox"]):focus + label {
        ${ labelOnFocus }
    }
    
    &:not([type="checkbox"]):not(:focus) + label {
        ${({ isNotEmpty }) => isNotEmpty && labelOnFocus}
    }

    &[type="checkbox"]:focus + label span {
        box-shadow: 0 0 0 2px;
    }
    
    ${({ type }) => (type === "checkbox" || type === "radio") && styleForCheckbox}
`;
