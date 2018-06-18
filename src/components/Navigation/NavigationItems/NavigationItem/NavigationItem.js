import React from 'react';
import './NavigationItem.css';
import { Link } from 'react-router-dom';

const navigationItem = (props) => (
    <li>
        <Link to={ {
            pathname: props.link_to,
            hash: props.hash,
            search: props.queryString
        } }>{ props.children }</Link>
    </li>
);

export default navigationItem;
