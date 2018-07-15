import React from 'react';

import './SocialMedia.css';

const socialMedia = (props) => {
    return (
        <article id='socialMedia'>
            <div className="social_media flex_row">
              <div className="fb">
                <a href="http://eg.com" title='Facebook'><i className="fa fa-facebook-official" style={{fontSize:'24px', color:'#3b5998'}}></i></a>
              </div>
              <div className="tw">
                <a href="http://eg.com" title='Twitter'><i className="fa fa-twitter" style={{
                    fontSize:'24px', color:'#55acee'
                }}></i></a>
              </div>
              <div className="ig">
                <a href="http://eg.com" title="Instagram"> <i className="fa fa-instagram" style={{
                    fontSize:'24px', color:'#bc2a8d'
                }}></i></a>
              </div>
            </div>
        </article>
    );
}

export default socialMedia;
