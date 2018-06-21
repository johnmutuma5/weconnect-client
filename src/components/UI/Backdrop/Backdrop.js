import React from 'react';
import { PropTypes } from 'prop-types';
import './Backdrop.css';

const backDrop = (props, context) => {
    let backdropClasses = ['Backdrop'];
    backdropClasses = context.state.sideDrawerOpen ?
                        backdropClasses.concat('active') :
                      backdropClasses.concat('inactive');

    return (
        <div id={ props.id } className={ backdropClasses.join(' ') }
             onClick={ context.handleToggleSideDrawer } />
    );
};

backDrop.contextTypes = {
    state: PropTypes.object.isRequired,
    handleToggleSideDrawer: PropTypes.func.isRequired
}

export default backDrop;
