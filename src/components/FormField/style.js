import styled from "styled-components";

export const StyledFormField = styled.div`
    display: flex;
    margin: 15px auto;
    flex-direction: column;
    width: 95%;
    max-width: 400px;
    padding: 8px 0;
`;

export const InputContainer = styled.div`
    position: relative;
`;

export const Errors = styled.div`
    color: red;
    font-size: 0.75em;
    padding: ${({ padding }) => padding && '8px'};
    display: flex;
    flex-direction: column;
`
