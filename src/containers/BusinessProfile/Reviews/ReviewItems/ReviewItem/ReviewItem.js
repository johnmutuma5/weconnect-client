import React from 'react';

const reviewItem = (props) => {
    return (
        <li>
          <div class="review">
            <div class="review_head">
              <div class="user_name">
                { props.author }
              </div>
            </div>
            <div class="review_body">
                <blockquote cite="http://">
                <h4>{ props.heading }</h4>
                <q cite="">
                  { props.body }
                </q>
                </blockquote>
            </div>
          </div>
        </li>
    );
};

export default reviewItem;
