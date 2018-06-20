import React from 'react';
import { PropTypes } from 'prop-types';
import './SideMenuToggler.css';

const sideMenuToggler = (props, context) => {
    let classes = ["SideMenuToggler"]
    classes = context.state.sideDrawerOpen ?
                classes.concat("invisible") :
              classes.concat("visible");

    return (
        <div className={ classes.join(' ') }
            onClick={ context.handleToggleSideDrawer }>
                <span />
                <span />
                <span />
        </div>
    );
}

sideMenuToggler.contextTypes = {
    state: PropTypes.object.isRequired,
    handleToggleSideDrawer: PropTypes.func.isRequired
}

export default sideMenuToggler;
