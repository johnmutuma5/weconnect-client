import React from 'react';
import './Backdrop.css';

const backDrop = (props, context) => {
    let backdropClasses = ['Backdrop'];
    backdropClasses = props.active ?
                        backdropClasses.concat('active') :
                      backdropClasses.concat('inactive');

    return (
        <div id={ props.id } className={ backdropClasses.join(' ') }
             onClick={ props.click } />
    );
};

export default backDrop;
