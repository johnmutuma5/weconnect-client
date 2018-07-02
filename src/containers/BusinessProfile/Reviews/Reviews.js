import React from 'react';
import Aux from '../../../hoc/Aux';
import ReviewItems from './ReviewItems/ReviewItems';
import AddReviewElements from './AddReviewElements/AddReviewElements';

const reviews = (props) => {
    return (
        <Aux>
            <div class="">
              <h2>User reviews</h2>
            </div>
            <article class="">
              <AddReviewElements
                updateReviews={ props.updateReviews }
                handleAddReview={ props.handleAddReview } />
              <ReviewItems reviews={ props.reviews } />
            </article>
        </Aux>
    );
}

export default reviews;
