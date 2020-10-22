import styled from 'styled-components'

import { NavLink as Link } from 'react-router-dom';



export const Nav = styled.nav`
    top: 0;  
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((80vw - 1000px) / 2);
    border-bottom: 0.5px solid #f3ecec;
`
export const NavSearch = styled.div`
 
`
export const Input = styled.input`
    align-items: center;
    width: 600px;
    height: 40px;
    background: #E1E7F3 0% 0% no-repeat padding-box;
    border-radius: 48px;
    opacity: 1;
    // text-align: left;
    border: none;
    outline: none;
    // font: normal normal normal 16px/19px Product Sans;
    letter-spacing: 0px;
    color: #1A2A41;
    opacity: 1;
    padding-left: 20px
`

// ul
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    // margin-right: -50px;
    justify-content: space-around;
`

// li. a

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    outline: none;
    margin: 0 20px 0 0;

    &:hover {
        color: orange;
        transition: 0.2s ease-all-out
    }
`

export const NavBtnLink = styled.button`
    background: orange;
    color: #fff;
    border-radius: 20px;
    border: transparent;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 20px 0 0;
    transition: all 400ms cubic-bezier(.47,1.64,.41,.8);

	&:hover {
		transform: scale(1.1);
	}

`