import styled from 'styled-components';
import img from '../../assests/glass1.png'
// CardContainer, CardContent, ColorSet, ColorControl, CardPrice
export const CardLayout = styled.div`
    @media screen and (min-width: 1024px) and (max-width: 2560px) {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        margin: 0 0 20px 0;
        padding: 0.5rem calc((80vw - 768px) / 2);
        justify-content: center;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 320px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin: 0px 0 50px 0;
        padding: 30px 50px;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    } 
`

export const CardImage = styled.div`
    // margin: 10px 0 0 0
    cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`

export const CardContainer = styled.div`
    @media screen and (min-width: 1024px) and (max-width: 2560px) {
        width: 240px;
        height: 346px;
        margin: 10px 50px 100px 0;
    }
    
    @media screen and (min-width: 320px) and (max-width: 768px) {
        width: 200px;
        height: 320px;
        margin: 10px;
    } 
`;

export const CardContent = styled.div`
    @media screen and (min-width: 1024px) and (max-width: 2560px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding: 10px 20px 10px 0;
        font-size: 12px;
        font-weight: 700;
    }
    
    @media screen and (min-width: 320px) and (max-wdidth: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        font-size: 12px;
        font-weight: 700;
    } 
`;

export const ColorSet = styled.div`
    // border: 1px solid red;
`;

export const Button = styled.button`
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 5px 0 0;
    transition: all 400ms cubic-bezier(.47,1.64,.41,.8);
    box-shadow: 0px 9px 18px #00000029;

	&:hover {
		transform: scale(1.1);
	}
`;

export const CardPrice = styled.div`
    font-size: 12px;
    font-weight: bold;
`;