import React from 'react';
import Aux from '../../../hoc/Aux';
import ReviewItems from './ReviewItems/ReviewItems';
import AddReviewElements from './AddReviewElements/AddReviewElements';

import './Reviews.css';

const reviews = (props) => {
    return (
        <Aux>
            <div className="">
              <h2>User reviews</h2>
            </div>
            <article className="BusinessReviews">
              <AddReviewElements
                readyToAddReview={props.readyToAddReview}
                toggleReadyToAddReview={props.toggleReadyToAddReview}
                updateReviews={ props.updateReviews }
                handleAddReview={ props.handleAddReview } />
              <ReviewItems reviews={ props.reviews } />
            </article>
        </Aux>
    );
}

export default reviews;
