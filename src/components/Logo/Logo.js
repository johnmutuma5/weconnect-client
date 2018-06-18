import React from 'react';
import './Logo.css';

const logo = (props) => (
    <div className="logo">
        <img src={ props.src } alt={ props.alt_text } />
    </div>
);

export default logo;
