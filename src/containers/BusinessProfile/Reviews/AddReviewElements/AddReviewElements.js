import React from 'react';
import Button from '../../../../components/UI/Button/Button';
import AddReviewForm from './AddReviewForm/AddReviewForm';
import Aux from '../../../../hoc/Aux';

import './AddReviewElements.css';

const addReviewElements = (props) => {
    return (
        <Aux>
            <div class="prompt_review">
              <div class="prompt">
                <p>If you know this business, please leave a review...</p>
              </div>
              <Button type='dark' onClickHandler={()=>{}}>
                <span>Review</span>
              </Button>
            </div>
            <div className='ReviewForm'>
                <AddReviewForm
                    onSubmit={ props.handleAddReview }
                    invokeUpdateReviews={ props.updateReviews }/>
            </div>
        </Aux>
    );
};

export default addReviewElements;
