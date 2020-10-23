import styled from 'styled-components';
import img from '../../assests/banner2.png'

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

export const Jumbotron = styled.div`
    @media screen and (min-width: 1024px) and (max-width: 2560px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url(${img});
        background-repeat:no-repeat;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        background-size:cover;
        background-position:center;
        height: 65vh;
        // padding: 0.5rem calc((80vw - 1000px) / 2);
        padding: .5rem 8.5rem 0 8.5rem;
        align-items: left;
    }
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: url(${img});
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        height: 35vh;
        align-items: flex-start;
        padding: 0 1.5rem;
    } 

`

export const Text = styled.h1`
    @media screen and (max-width: 2560px)  {
        font-weight: bold;
        font-size: 60px;
        letter-spacing: 0px;
        opacity: 1;
        color: #F58C23;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
        font-weight: bold;
        font-size: 22px;
        letter-spacing: 1.5px;
        opacity: 1;
        color: #F58C23;
        // width: 20%;
    } 
`

export const Btn = styled.button`

    @media screen and (min-width: 1024px) and (max-width: 2560px) {
        background-color: #F58C23;
        color: #fff;
        padding: 20px 30px;
        width: 15rem;
        border: none;
        outline: none;
        border-radius: 40px;
        font-size: 16px;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
        background-color: #F58C23;
        color: #fff;
        padding: 10px 15px;
        // width: 30%;
        border: none;
        outline: none;
        border-radius: 40px;
        font-size: 12px;
        margin: 18px 0 18px 0;
    }
`