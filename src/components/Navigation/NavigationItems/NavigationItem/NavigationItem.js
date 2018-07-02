import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props, context) => {
    const li_attribs = {
        className: 'NavigationItem'
    }

    const navlink_to = {
        pathname: props.link_to,
        hash: props.hash,
        search: props.queryString
    };

    return (
        <li { ...li_attribs } >
            <NavLink to={ navlink_to }>
                { props.children }
            </NavLink>
        </li>
    );
};


export default navigationItem;
