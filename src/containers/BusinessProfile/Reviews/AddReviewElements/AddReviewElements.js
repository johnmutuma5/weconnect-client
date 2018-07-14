import React from 'react';
import Button from '../../../../components/UI/Button/Button';
import AddReviewForm from './AddReviewForm/AddReviewForm';
import Aux from '../../../../hoc/Aux';

import './AddReviewElements.css';

const addReviewElements = (props) => {
    let reviewFormClasses = ['ReviewForm'];
    let buttonText = 'Review';

    if(props.readyToAddReview){
        reviewFormClasses = reviewFormClasses.concat(['active'])
        buttonText = 'Hide'
    }
    else
        reviewFormClasses = reviewFormClasses.concat(['inactive'])

    let addReviewElements = null;
    // if current user is business owner, these will not be visible
    if (props.show)
        addReviewElements = (
            <Aux>
                <div class="prompt_review">
                  <div class="prompt">
                    <p> { 'If you know this business, please leave a review...' }</p>
                  </div>
                  <Button type='dark' onClickHandler={props.toggleReadyToAddReview}>
                    <span>{ buttonText }</span>
                  </Button>
                </div>
                <div className={ reviewFormClasses.join(' ')}>
                    <AddReviewForm
                        onSubmit={ props.handleAddReview }
                        invokeUpdateReviews={ props.updateReviews }/>
                </div>
            </Aux>
        );

    return addReviewElements;
};

export default addReviewElements;
