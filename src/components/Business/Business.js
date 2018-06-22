import React from 'react';

import './Business.css';

const business = (props) => (
    <div className="Business flex_col">
      <div className="main_content flex_row">
        <div className="business_thumbnail">
          <div className="image">
              photo
          </div>
        </div>
        <div className="business_info flex_col">
          <div className="business_name">
            <h3>business name</h3>
          </div>
          <div className="business_location">
            <h4>location</h4>
          </div>
          <div className="business_category">
            <p>category</p>
          </div>
        </div>
      </div>

      <div className="quick_tools flex_row">
        <div className="website">
          <p>website</p>
        </div>
        <div className="email">
          <p>email</p>
        </div>
        <div className="direction">
          <p>direction</p>
        </div>
        <div className="phone">
          <p>phone</p>
        </div>
      </div>
    </div>
);

export default business;
