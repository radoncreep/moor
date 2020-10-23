import styled from 'styled-components';

export const Container = styled.div`
   margin: 0 auto;
   width: 90%;
//    border: 1px solid red;
   padding: 0.5rem calc((80vw - 1000px) / 2);

   @media screen and (min-width: 320px) {
        margin: 0px auto;
        width: 80%;
    } 
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Text = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    padding: 10px 20px;
    width: 100%;
`;


export const Btn = styled.button`
    background-color: #F58C23;
    color: #fff;
    padding: 20px 30px;
    // width: 25%;
    border: none;
    outline: none;
    border-radius: 40px;
    font-size: 12px;

    @media screen and (min-width: 320px) {
        margin: 0px 30%;
    } 
`