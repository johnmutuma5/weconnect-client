import React from 'react';
import { PropTypes } from 'prop-types';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props, context) => {

    const li_attribs = {
        onClick: context.handleToggleSideDrawer,
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

navigationItem.contextTypes = {
    handleToggleSideDrawer: PropTypes.func.isRequired
}

export default navigationItem;
