import styled from 'styled-components';
import img from '../../assests/glass1.png'
// CardContainer, CardContent, ColorSet, ColorControl, CardPrice
export const CardLayout = styled.div`
    display: flex;
    overflow: hidden;
    // margin: 0 0 500px 0;
    padding: 100px 300px;
    justify-content: center;
    flex-wrap: wrap;
`

export const CardImage = styled.div`
    // margin: 10px 0 0 0
    cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`

export const CardContainer = styled.div`
    // position: relative;
    width: 340px;
    height: 446px;
    // border: 1px solid red;
    margin: 10px 50px 100px 0;
`;

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 0;
    font-size: 12px;
    font-weight: 700;
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