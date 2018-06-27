import React from 'react';

import './CreateButton.css';

const createButton = (props) => (
    <div className={'CreateButton'} id={ props.id } onClick={props.click }  />
);

export default createButton;
