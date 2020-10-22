import React from 'react';

import { Jumbotron, Text, Btn } from './BannerElem';
const Banner = () => {
    return (
        <>
            <Jumbotron>
                <Text>25% off</Text>
                <Text style={{color: '#000'}}>oxlades</Text>
                <Btn>Shop Now</Btn>
            </Jumbotron>
        </>
    )
}

export default Banner
