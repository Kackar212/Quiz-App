import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
`;

export const Svg = styled.svg`
    ${({ scale = 1 }) => `
        width: ${scale * 38}px;
        height: ${scale * 38}px;
    `}

    animation: ${rotate} 0.9s linear infinite;
`;