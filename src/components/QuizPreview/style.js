import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuizPreviewContainer = styled.div`
    max-width: 60ch;
    padding: 20px 10px;
    margin: 0 auto;
    width: 100%;
    position: relative;
`;

export const AuthorLink = styled(Link)`
    text-decoration: none;
    color: #611f5c;
    font-weight: 600;
`

export const QuizTitle = styled(Link)`
    text-decoration: none;
    color: #e6d584;
    text-transform: uppercase;
    padding: 10px;
    background: #000000;
    margin-bottom: 4px;
    display: inline-block;
    font-weight: 700;
    min-width: 100px;
    margin-right: 6px;
    position: relative;
    width: calc(100% - 45px);

    &::before {
        content: '';
        position: absolute;
        border: 2px solid #611f5c;
        width: 100%;
        height: 100%;
        transform: translate(5px, 5px);
        left: 0;
        top: 0;
        z-index: -1;
        transition: transform .3s, background-color .3s;
    }

    &:hover::before {
        transform: translate(-5px, -5px);
        background-color: #611f5c;
    }
`

export const MetaDataContainer = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 20%);
    margin-top: 10px;
    padding: 8px;
    justify-content: space-between;

    & button {
        margin: 0 0 0 15px;
    }
`

export const NumberOfQuestions = styled.span`
    display: flex;
    background: #000000;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    color: #e6d584;
    right: 10px;
`
