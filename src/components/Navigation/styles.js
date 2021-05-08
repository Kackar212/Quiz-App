import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 300px;
    padding: 0;
    margin: 20px auto;
`

export const NavigationLink = styled(Link)`
    text-decoration: none;
    color: #222;
    font-weight: 600;
`