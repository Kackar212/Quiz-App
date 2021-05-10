import styled from "styled-components";

export const StyledLabel = styled.label`
    position: ${({ position = "absolute" }) => position};
    top: 50%;
    transform: ${({ position }) => position !== "static" && "translateY(-50%)"};
    left: 8px;
    color: ${({ color = "#a09797" }) => color};
    display: flex;
`;