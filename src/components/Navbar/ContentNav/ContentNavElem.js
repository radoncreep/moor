import styled from 'styled-components';


export const Nav = styled.nav`
    top: 0;  
    display: flex;
    height: 60px;
    background-color: #E1E7F3;
    justify-content: flex-start;
    align-items: left;
    padding: 0.5rem calc((80vw - 1000px) / 2);
    border-bottom: 0.5px solid #f3ecec;
`

export const NavDropLink = styled.button`
    color: #000;
    font-size: 14px;
    width: 150px;
    text-align: left;
    padding: 0 0 0 5px;
    margin: 0 100px 0 0;
    background: none;
    cursor: pointer;
    border: none;
`