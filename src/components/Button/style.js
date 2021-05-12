import styled from "styled-components";

export const SrOnly = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0, 0, 0);
    border: 0;
`;

export const StyledButton = styled.button`
    border: 1px solid rgba(0, 0, 0, .2);
    padding: ${({ hasIcon }) => hasIcon ? '6px 8px' : '10px 18px' };
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    display: flex;
    margin: ${({ full }) => full ? '10px auto' : '16px 8px auto 2px' };
    background: #fff;
    transition: background 0.3s;
    font-weight: 600;    
    justify-content: center;
    border-radius: 0;


    & svg {
        transition: fill 0.3s;
    }

    width: ${({ full }) => !!full && "100%"};

    &:not([disabled]):hover {
        background: ${({ full }) => full ? '#52d250' : '#a54545'};
        color: #fff;
        & svg {
            fill: #eee;
        }
    }
`;
