import styled from 'styled-components';

export const Container = styled.div`
   margin: 0 auto;
   width: 90%;
//    border: 1px solid red;
   padding: 0.5rem calc((80vw - 1000px) / 2);
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

