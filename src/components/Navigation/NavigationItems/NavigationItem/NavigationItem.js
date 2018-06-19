import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className='NavigationItem'>
        <NavLink to={ {
            pathname: props.link_to,
            hash: props.hash,
            search: props.queryString
        } }>{ props.children }</NavLink>
    </li>
);

export default navigationItem;
