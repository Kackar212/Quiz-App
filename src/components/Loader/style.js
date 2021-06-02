import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
`;

export const LoaderContainer = styled.div`
    padding: 0 10px;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const Svg = styled.svg`
    ${({ scale = 1 }) => `
        width: ${scale * 38}px;
        height: ${scale * 38}px;
    `}

    height: 30px;
    width: 30px;
    
    @media screen and (min-width: 546px) {
        right: -40px;
    }

    animation: ${rotate} 0.9s linear infinite;
`;