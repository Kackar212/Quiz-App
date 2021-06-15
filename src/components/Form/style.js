import styled from "styled-components";

export const StyledForm = styled.form`
    width: 95%;
    max-width: 400px;
    margin: 0 auto;
`;

export const Message = styled.div`
    color: ${({ isSuccess }) => isSuccess ? '#52d250' : 'red'};
    margin-top: 50px;
`;
