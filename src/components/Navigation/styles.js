import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 0;
    margin: 20px 30px;
    flex-direction: column;
`

export const NavigationLink = styled(Link)`
    text-decoration: none;
    color: #222;
    font-weight: 600;
    position: relative;
    padding: 10px 0;
    display: inline-block;
`