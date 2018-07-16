import React from 'react';

import './BusinessQuickLinks.css';

const businessQuickLinks = (props) => (
    <div className="BusinessQuickLinks flex_row">
        <div className="website">
            <p><i className="fas fa-globe"></i></p>
        </div>
        <div className="email">
            <p><i className="far fa-envelope"></i></p>
        </div>
        <div className="direction">
            <p><i className="far fa-compass"></i></p>
        </div>
        <div className="phone">
            <p><i className="fas fa-phone"></i></p>
        </div>
    </div>
);

export default businessQuickLinks;
