import React from 'react';
import { PropTypes } from 'prop-types';
import { toggleSideDrawer } from '../../../store/actions/actions';

import './SideMenuToggler.css';

const sideMenuToggler = (props, context) => {
    const state = context.layoutState;

    let classes = ["SideMenuToggler"]
    classes = state.sideDrawerOpen? classes.concat("invisible"): classes.concat("visible");

    const store = context.store;
    return (
        <div className={ classes.join(' ') }
            onClick={ () => store.dispatch(toggleSideDrawer()) }>
                <span />
                <span />
                <span />
        </div>
    );
}

sideMenuToggler.contextTypes = {
    layoutState: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default sideMenuToggler;
