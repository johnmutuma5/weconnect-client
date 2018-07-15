import React from 'react';

const sideElements = (props) => (
    <div className='SideElements'>
        <div className='side-wrapper'>
            { props.children }
        </div>
    </div>
);

export default sideElements;
