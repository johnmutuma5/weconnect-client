import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { toggleSideDrawer } from '../../../../store/actions/actions';

import './NavigationItem.css';

const navigationItem = (props, context) => {
    const store = context.store;

    const li_attribs = {
        onClick: () => store.dispatch(toggleSideDrawer()),
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
    store: PropTypes.object.isRequired
}


export default navigationItem;
