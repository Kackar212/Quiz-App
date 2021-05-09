import styled from "styled-components";

export const StyledLabel = styled.label`
    position: ${({ position = "absolute" }) => position};
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    color: ${({ color = "#a09797" }) => color};
    display: flex;
`;