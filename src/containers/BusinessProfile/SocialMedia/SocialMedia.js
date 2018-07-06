import React from 'react';

import './SocialMedia.css';

const socialMedia = (props) => {
    return (
        <article id='socialMedia'>
            <div class="social_media flex_row">
              <div class="fb">
                <a href="#" title='Facebook'><i class="fa fa-facebook-official" aria-hidden="true" style={{fontSize:'24px', color:'#3b5998'}}></i></a>
              </div>
              <div class="tw">
                <a href="#" title='Twitter'><i class="fa fa-twitter" aria-hidden="true" style={{
                    fontSize:'24px', color:'#55acee'
                }}></i></a>
              </div>
              <div class="ig">
                <a href="#" title="Instagram"> <i class="fa fa-instagram" style={{
                    fontSize:'24px', color:'#bc2a8d'
                }}></i></a>
              </div>
            </div>
        </article>
    );
}

export default socialMedia;
