import styled from "styled-components";

export const StyledLabel = styled.label`
    position: ${({ position = "absolute" }) => position};
    top: 50%;
    transform: ${({ position }) => position !== "static" && "translateY(-50%)"};
    left: 8px;
    color: ${({ color = "#a09797" }) => color};
    display: flex;
    cursor: ${({ position }) => position === "static" ? 'pointer' : 'text'};
    background-color: #fff;
    padding: 0 4px;
    /* &:checked {
        color: ${({ isCorrectAnswer }) => isCorrectAnswer !== undefined && '#fff'};
        background-color: ${({ isCorrectAnswer }) => isCorrectAnswer ? 'green' : isCorrectAnswer === false && 'red'};
        padding: ${({ isCorrectAnswer }) => isCorrectAnswer !== undefined && '5px'} 4px;
    } */
`;