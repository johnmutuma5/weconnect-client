import React from 'react';
import PropTypes from 'prop-types';
import BusinessMainContent from './BusinessMainContent/BusinessMainContent';
import BusinessQuickLinks from './BusinessQuickLinks/BusinessQuickLinks';

import './Business.css';

const business = (props) => (
    <div className="Business flex_col">
        <BusinessMainContent { ...props } />
        <BusinessQuickLinks />
    </div>
);

business.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default business;
