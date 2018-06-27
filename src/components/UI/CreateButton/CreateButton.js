import React from 'react';

import './CreateButton.css';

const createButton = (props) => {
    let classes = ['CreateButton'];
    classes = props.active ?
                classes.concat('active') :
                classes.concat('inactive')
    return (
        <div className={ classes.join(' ') }
             id={ props.id } onClick={props.click }>
                <span />
                <span />
        </div>
    )
};

export default createButton;
