import React from 'react';

import './Message.css';

const message = (props) => {
    const classes = ['Message', props.type].join(' ');
    return (
        <div className={classes}>
            { props.children }
        </div>
    );
};

export default message;
