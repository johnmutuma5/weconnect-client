import React from 'react';

import './Button.css';

const button = (props) => (
    <div
        className={ 'Button' }
        onClick={ props.onClickHandler }> { props.children }</div>
);

export default button;
