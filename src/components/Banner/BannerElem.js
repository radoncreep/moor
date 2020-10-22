import styled from 'styled-components';
import img from '../../assests/banner2.png'

export const Jumbotron = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    background-image: url(${img});
    background-repeat:no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    background-position:center;
    height: 55vh;
    // padding: 0.5rem calc((80vw - 1000px) / 2);
    padding: 0 16.5rem;
    align-items: left;
`

export const Text = styled.h1`
    font-weight: bold;
    font-size: 60px;
    letter-spacing: 0px;
    opacity: 1;
    color: #F58C23;
    width: 20%;
`

export const Btn = styled.button`
    background-color: #F58C23;
    color: #fff;
    padding: 20px 40px;
    width: 15%;
    border: none;
    outline: none;
    border-radius: 40px;
    font-size: 16px;
`