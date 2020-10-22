import React from 'react'
import { Container, Content, Text} from './ReviewElement';
import UserImage from '../../../assests/profilepic.png';
const Review = (props) => {
    return (
        <>
            <Container>
                
                <Content>
                    <img src={UserImage} alt="profile" style={{ width: '60px', height: '60px', borderRadius: '50%'}}/>
                    <Text>
                        <p style={{ fontSize: '14px', fontWeight: 'bold'}}>{props.name}</p>
                        <p style={{ fontSize: '12px', fontWeight: 'normal', opacity: '0.7', marginBottom: '10px'}}>{props.date}</p>
                        <p style={{
                            fontSize: '14px',
                            fontWeight: 'normal', 
                            opacity: '0.7', 
                            borderBottom: '1px solid #1a2a41', 
                            width: '100%',
                            paddingBottom: '30px'
                            }}>{props.description}</p>
                    </Text>
                </Content>
            </Container>
        </>
    )
}

export default Review;
