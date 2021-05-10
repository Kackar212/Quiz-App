import styled from "styled-components";

export const StyledInput = styled.input`
    border: 0;
    box-shadow: ${({ border }) => border || "0 0 0 1px rgb(0 0 0 / 20%)"};
    padding: 10px 8px;
    width: 100%;
    border-radius: 0;
    ${({ type }) => (
        (type === "checkbox" || type === "radio") && `
                box-shadow: none;
                position: absolute;
                left: -9999px;

                & + label {
                    color: #222;
                    display: flex;
                    align-items: center;
                    text-transform: uppercase;
                }

                &:checked + label span::after {
                    display: block;
                }
        `)
    }
`;
