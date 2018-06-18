import React from 'react';
import './NavigationItem.css';
import { Link } from 'react-router-dom';

const navigationItem = (props) => (
    <li>
        <Link to={ props.link_to }>{ props.children }</Link>
    </li>
);

export default navigationItem;
