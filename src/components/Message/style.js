import styled from "styled-components";
import { NavigationLink } from "../Navigation/styles";

export const MessageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    width: 95%;
    margin: 0 auto;
    background: #fff;
    color: #222;
    border-radius: 2px;
    padding: 10px 0 10px 8px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, .2);
    max-width: 60ch;
    flex-direction: column;
    font-size: 0.85em;
`;

export const MessageContent = styled.p`
    display: flex;
    margin: 0 0 10px 0;
`;

export const MessageLink = styled(NavigationLink)`
    display: flex;
    padding: 8px;
    background-color: #222;
    color: #fff;
`;
