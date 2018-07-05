import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem';

const reviewItems = (props) => {
    const reviews = props.reviews.map(review => (
        <ReviewItem
            key={ review.id }
            author={ review.author.name }
            heading={ review.heading }
            body={ review.body }/>
    ));
    return (
        <div class="reviews">
          <ul>
            { reviews }
          </ul>
        </div>
    );
};


export default reviewItems;
