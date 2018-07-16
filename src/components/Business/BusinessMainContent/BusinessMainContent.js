import React from 'react';
import BusinessThumbnail from './BusinessThumbnail/BusinessThumbnail';
import BusinessMainDescription from './BusinessMainDescription/BusinessMainDescription'

import './BusinessMainContent.css';


const businessMainContent = (props) => (
    <div className="BusinessMainContent">
        <BusinessMainDescription { ...props }/>
        <BusinessThumbnail />
    </div>
);

export default businessMainContent;
