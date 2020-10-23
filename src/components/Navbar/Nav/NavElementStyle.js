import styled from 'styled-components'

import { NavLink as Link } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

// creating a media query for each supported device
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
}

export const NavContainer = styled.div`
    width: 100%;
`
export const Nav = styled.nav`
    @media screen and (min-width: 768px) and (max-width: 2560px) {
        top: 0;  
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem calc((80vw - 1000px) / 2);
        border-bottom: 0.5px solid #f3ecec;
    }
   

    // @media ${device.mobileS} {
    //     top: 0;  
    //     display: flex;
    //     height: 60px;
    //     justify-content: flex-start;
    //     // align-items: center;
    //     padding: 0.5rem calc((80vw - 768px) / 2);
    //     // border-bottom: 0.5px solid #f3ecec;
    //     background-color: orange;
    //     width: 100%;
    // }

    @media screen and (min-width: 320px) and (max-width: 425px) {
        top: 0;  
        display: flex;
        height: 60px;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 10px;
        border-bottom: 0.5px solid #f3ecec;
    } 
`
export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;    
    } 
`
export const Search =  styled(FaSearch)`
    position: absolute;
    margin: 10px 0 0 550px;
    cursor: pointer;
`
export const NavSearch = styled.div`
 
`
export const Input = styled.input`
    align-items: center;
    width: 600px;
    height: 30px;
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
    padding-left: 20px;
    
  
    @media ${device.mobileS} {
        align-items: center;
        width: 185px;
        height: 35px;
        background: #E1E7F3;
        border-radius: 48px;
        opacity: 1;
        border: none;
        outline: none;
        letter-spacing: 0px;
        color: #1A2A41;
        opacity: 1;
        padding-left: 20px;
        
    }

    @media screen and (min-width: 375px) {
        width: 200px;
    } 
`

// ul
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    // margin-right: -50px;
    justify-content: space-around;

    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: none;
    } 
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

    @media screen and (min-width: 320px) {
        margin: 0 10px 0 5px;
        font-size: 12px;
        font-weight:bold;
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