import React from 'react';

import './Button.css';

const button = (props) => {
    let buttonClasses = ['Button'];
    buttonClasses = buttonClasses.concat([props.type])

    return (
        <div
            className={ buttonClasses.join(' ') }
            onClick={ props.onClickHandler }> { props.children }</div>
    );
};

export default button;
