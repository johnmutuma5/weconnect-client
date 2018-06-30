import React from 'react';

import './Modal.css';

const modal = (props) => {
    let modalClasses = ['Modal'];
    if (props.isVisible)
        modalClasses = modalClasses.concat(['visible'])
    else
        modalClasses = modalClasses.concat(['invisible'])

    return (
        <div className={ modalClasses.join(' ') } id={ props.id }>
            <p>{ props.title }</p>
            <span />
            { props.children }
        </div>
    );
};


export default modal;
