import React from 'react';
import { PropTypes } from 'prop-types';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props, context) => {
    const to = {
        pathname: props.link_to,
        hash: props.hash,
        search: props.queryString
    };

    const attribs = {
        onClick: context.handleToggleSideDrawer,
        className: 'NavigationItem'
    }

    return (
        <li { ...attribs } >
            <NavLink to={ to }>
                { props.children }
            </NavLink>
        </li>
    );
};

navigationItem.contextTypes = {
    handleToggleSideDrawer: PropTypes.func.isRequired
}

export default navigationItem;
