import styled from "styled-components";

export const StyledQuestion = styled.div`
    ${({ isCorrectQuestion }) => isCorrectQuestion !== undefined && `
        background: ${isCorrectQuestion ? '#52d250' : 'rgb(255 60 60)'};
        padding: 8px;
        margin: 12px 0;
        color: #fff;
    `}
`;