import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => (
    <li>
        <a href={ props.link_to }>{ props.children }</a>
    </li>
);

export default navigationItem;
