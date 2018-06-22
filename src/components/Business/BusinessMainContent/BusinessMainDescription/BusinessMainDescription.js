import React from 'react';

import './BusinessMainDescription.css';

const businessMainDescription = (props) => (
    <div className="BusinessMainDescription flex_col">
        <div className="business_name">
            <h3>{ props.name }</h3>
        </div>
        <div className="business_location">
            <h4>{ props.location }</h4>
        </div>
        <div className="business_category">
            <p>{ props.category }</p>
        </div>
    </div>
);

export default businessMainDescription;
