import styled from "styled-components";
import checkMark from '../../assets/check-mark.svg';


export const StyledCustomCheckbox = styled.span`
    border: 1px solid;
    width: 24px;
    display: flex;
    height: 24px;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    &::after {
        content: '';
        background: url(${checkMark});
        display: block;
        background-size: contain;
        background-position: center;
        width: 18px;
        height: 18px;
    }
`;