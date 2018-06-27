import React from 'react';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <div>
            <img src={ props.src } alt={ props.alt_text } />
        </div>
        <div className="synopsis">
            <p>{ 'Put your businesses on a global platform...' }</p>
            <p>{ 'Looking to buy? You can find other businesses in your location' }</p>
        </div>
    </div>
);

export default logo;
