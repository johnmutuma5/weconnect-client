import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li>
        <NavLink to={ {
            pathname: props.link_to,
            hash: props.hash,
            search: props.queryString
        } }>{ props.children }</NavLink>
    </li>
);

export default navigationItem;
