import styled from "styled-components";
import {Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 6px;;
    white-space: nowrap;

    color: ${({dark}) => (dark ? 'white' : "white")};
    padding: ${({big}) => (big ? '14px 48px': '12px 40px')};
    background: ${({primary}) => (primary ? '#0E74E6' : 'white')};
    font-size: ${({fontBig}) => (fontBig ? '21px' : '23px')};
    outline: none;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? "#005BC1" : '#0E74E6')};

    }
`

