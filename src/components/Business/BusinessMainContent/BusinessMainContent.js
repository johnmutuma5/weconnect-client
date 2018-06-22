import React from 'react';
import BusinessThumbnail from './BusinessThumbnail/BusinessThumbnail';
import BusinessMainDescription from './BusinessMainDescription/BusinessMainDescription'

import './BusinessMainContent.css';


const businessMainContent = (props) => (
    <div className="BusinessMainContent flex_row">
        <BusinessThumbnail />
        <BusinessMainDescription { ...props }/>
    </div>
);

export default businessMainContent;
