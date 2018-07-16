import React from 'react';

import './RightColumn.css';

const rightColumn = (props) => (
    <div className='RightColumn'>
        <div className='fixed-scrollable'>
            <div className='side-wrapper'>
                { props.children }
            </div>
        </div>
    </div>
);

export default rightColumn;
