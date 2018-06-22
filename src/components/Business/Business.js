import React from 'react';
import BusinessMainContent from './BusinessMainContent/BusinessMainContent';
import BusinessQuickLinks from './BusinessQuickLinks/BusinessQuickLinks';

import './Business.css';

const business = (props) => (
    <div className="Business flex_col">
        <BusinessMainContent { ...props } />
        <BusinessQuickLinks />
    </div>
);

export default business;
