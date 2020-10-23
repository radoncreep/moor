import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 35vh;
    margin-top: 200px;
    background-color: #1A2A41;
    color: #fff;
    justify-content: column;
    align-items: center;
    // padding: 0.5rem calc((90vw - 1000px) / 2);

    @media screen and (min-width: 320px) {
        display: flex;
        width: 100%;
        height: 50vh;
        margin-top: 100px;
        background-color: #1A2A41;
        color: #fff;
        justify-content: column;
        align-items: center;
        justify-content: center;
        // padding: 0.5rem calc((90vw - 1000px) / 2);
    } 
`
export const FooterContent = styled.div`

`
export const Logo = styled.h1`
    // display: block;
    font-size: 40px;
    padding: 20px 0;

    @media screen and (min-width: 320px) {
        font-size: 20px
    }
`;

export const IconWrapper = styled.div`
    padding: 50px 0;

    @media screen and (min-width: 320px) {
        padding: 20px 0;
    } 
`

export const Icon = styled.div`
    background-color: '#fff';
    border-radius: '50%';
`