import React from 'react';
import { Link } from 'react-router-dom'

import { CardLayout, CardImage, CardContainer, CardContent, ColorSet, Button, CardPrice } from './CardElement';
import image1 from '../../assests/glass1.png'
import image2 from '../../assests/glass2.png'
import image3 from '../../assests/glass3.png'
import image4 from '../../assests/glass4.png'
import image5 from '../../assests/glass5.png'
import image6 from '../../assests/glass6.png'



const Card = () => {
        const imageDb = [
                {title: image1,
                colors: {
                        color1: '#A5693B',
                        color2: '#811111',
                        color3: '#1A2A41',
                },
                price:  (Math.random() * 25).toFixed(2),
                brand: 'Oxlades'
                },
                {title: image2,
                        colors: {
                                color1: '#0773AB',
                                color2: '#1A2A4',
                                color3: '#000',
                        },
                        price: (Math.random() * 25).toFixed(2),
                        brand: 'Alexander Fang'
                },
                {title: image3,
                        colors: {
                                color1: '#E8C0A0',
                                color2: '#0773AB',
                                color3: '#1A2A41',
                        },
                        price: (Math.random() * 25).toFixed(2),
                        brand: 'Cocoa Channel'
                },
                {title: image4,
                        colors: {
                                color1: '#DBB742',
                                color2: '#AF0000',
                                color3: '#000',
                        },
                        price: (Math.random() * 25).toFixed(2),
                        brand: 'Men In Black'
                },
                {title: image5,
                        colors: {
                                color1: '#811111',
                                color2: '#056D2B',
                                color3: '#0000',
                        },
                        price: (Math.random() * 25).toFixed(2),
                        brand: '50 Shades'
                },
                {title: image6,
                        colors: {
                                color1: '#E8C0A0',
                                color2: '#0773AB',
                                color3: '#1A2A41',
                        },
                        price: (Math.random() * 25).toFixed(2),
                        brand: 'Slim Kardashian'
                },    
        ];

        return (
                <>
                  <CardLayout>
                        {imageDb.map(photo => (
                                <CardContainer key={photo.brand}> 
                                        <CardImage to=""><img src={photo.title} style={{width: '100%', height: '76%'}} alt="img"/></CardImage>
                                        {/* <CardImage style = {{backgroundImage: `url(require("../../assests/glass1.png"))`}} /> */}
                                                <CardContent>
                                                        <p>{photo.brand}</p>
                                                        <ColorSet>
                                                                <Button style={{ backgroundColor: photo.colors.color1, width: '22px', height: '22px'}} />
                                                                <Button style={{ backgroundColor: 
                                                                        photo.colors.color2, width: '22px', height: '22px'}} />
                                                                <Button style={{ backgroundColor: photo.colors.color3, width: '26px', height: '26px'}} />
                                                        </ColorSet>
                                                </CardContent>
                                                <CardPrice>$ {photo.price}</CardPrice>
                                </CardContainer>
                        ))}
                  </CardLayout>
                  <Link to="/" 
                        style={{ 
                                display: 'flex', 
                                alignItems: "center", 
                                justifyContent: 'center',
                                textDecoration: 'none',
                                outline: 'none',
                                color: '#000',
                                cursor: 'pointer'
                                }}>Show More</Link>
                </>
        )              
}

export default Card;