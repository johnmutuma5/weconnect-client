import React from 'react';
import { PropTypes } from 'prop-types';
import './Backdrop.css';

const backDrop = (props, context) => {
    let backdropClasses = ['Backdrop'];
    backdropClasses = context.state.sideDrawerOpen ?
                        backdropClasses.concat('active') :
                      backdropClasses.concat('inactive');

    return (
        <div className={ backdropClasses.join(' ') }
             onClick={ props.click } />
    );
};

backDrop.contextTypes = {
    state: PropTypes.object.isRequired
}

export default backDrop;
