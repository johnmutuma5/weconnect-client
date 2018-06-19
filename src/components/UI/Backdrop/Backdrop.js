import React from 'react';
import './Backdrop.css';

const backDrop = (props) => {
    let backdropClasses = ['Backdrop'];
    backdropClasses = props.active ?
                        backdropClasses.concat('active') :
                      backdropClasses.concat('inactive');

    return (
        <div className={ backdropClasses.join(' ') }
             onClick={ props.click } />
    );
};

export default backDrop;
