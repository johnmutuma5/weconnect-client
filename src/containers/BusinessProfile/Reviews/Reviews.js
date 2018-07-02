import React from 'react';
import Aux from '../../../hoc/Aux';

const reviews = (props) => {
    return (
        <Aux>
            <div class="">
              <h2>User reviews</h2>
            </div>
            <article class="">
              <div class="prompt_review">
                <div class="prompt">
                  <p>If you know this business, please leave a review...</p>
                </div>
                <div class="button">
                  <span>Write a Review</span>
                </div>
              </div>
              <div class="reviews">
                <ul>
                  <li>
                    <div class="review">
                      <div class="review_head">
                        <div class="user_name">
                          Alice Doe
                        </div>
                        <div class="rating">
                          stars
                        </div>
                      </div>
                      <div class="review_body">
                        <blockquote cite="http://">
                          <q cite="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          </q>
                        </blockquote>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="review">
                      <div class="review_head">
                        <div class="user_name">
                          John Doe
                        </div>
                        <div class="rating">
                          stars
                        </div>
                      </div>
                      <div class="review_body">
                        <blockquote cite="http://">
                          <q cite="">reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </q>
                        </blockquote>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="review">
                      <div class="review_head">
                        <div class="user_name">
                          Ching Chong Cha
                        </div>
                        <div class="rating">
                          stars
                        </div>
                      </div>
                      <div class="review_body">
                        <blockquote cite="http://">
                          <q cite="">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </q>
                        </blockquote>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </article>
        </Aux>
    );
}

export default reviews;
