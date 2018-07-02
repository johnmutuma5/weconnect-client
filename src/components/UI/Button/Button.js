import React from 'react';

import './Button.css';

const button = (props) => {
    let buttonClasses = ['Button'];
    buttonClasses = props.type === 'dark'?
                        buttonClasses.concat(['Dark']):
                        buttonClasses.concat([''])
    return (
        <div
            className={ buttonClasses.join(' ') }
            onClick={ props.onClickHandler }> { props.children }</div>
    );
};

export default button;
