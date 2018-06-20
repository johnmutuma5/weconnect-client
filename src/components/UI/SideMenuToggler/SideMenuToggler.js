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
            onClick={ props.click }>
                <span />
                <span />
                <span />
        </div>
    );
}

sideMenuToggler.contextTypes = {
    state: PropTypes.object.isRequired
}

export default sideMenuToggler;
