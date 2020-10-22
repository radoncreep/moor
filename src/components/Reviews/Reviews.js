import React, { Component }from 'react';
import Review from './Review/Review';

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
                <button style={{
                    backgroundColor: '#F58C23',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '40px',
                    padding: '15px 30px',
                    cursor: 'pointer',
                    boxShadow: '0px 10px 20px #00000029',
                    // width: '50%',
                    margin: '0 45%',
                }}>See More reviews</button>
            </div>
        )
    }
};

export default Reviews;