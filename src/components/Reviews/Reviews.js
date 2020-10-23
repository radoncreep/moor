import React, { Component }from 'react';
import Review from './Review/Review';

import { btn, Btn } from './Review/ReviewElement';
class Reviews extends Component {
    state = {
        reviews: [
            {
                name: 'Johnson Falana',
                description: 'Hi there, I am having a wonderful experience on this platform, It is amaze balls.',
                date: Date.now()
            },
            {
                name: 'Stella Crew',
                description: 'Hey guys, I just want to appreciate this site and that I get the perfect shades for my outfits.',
                date: Date.now()
            },
            {
                name: 'Bret Willer',
                description: 'Moor provides affordable glasses, I am really pleased with their services.',
                date: Date.now()
            },
            {
                name: 'Josh Akintomi',
                description: 'This has to be my number one online goto for quailty glasses.',
                date: Date.now()
            },
        ]
    };

    render() {
        let messages;

        if (this.state.reviews.length !== 0) {
            messages = this.state.reviews.map(review => (
                    <Review key={review.name} name={review.name} description={review.description} date={review.date}/>
                ));
        };

        return (
            <div>
                <h1 
                    style={{ 
                        borderBottom: '2px solid #F58C23',
                        fontSize: '26px',
                        paddingBottom: '30px',
                        width: '62%',
                        margin: '0 auto 30px auto'
                        }}>Reviews</h1>
                {messages}
                <Btn>See More reviews</Btn>
            </div>
        )
    }
};

export default Reviews;