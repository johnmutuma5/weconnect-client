import React from 'react';

import './LeftColumn.css'

const leftColumn = (props) => (
    <div className='LeftColumn'>
        <div className='SideElements'>
            <div className='side-wrapper'>
                { props.children }
            </div>
        </div>
    </div>
);

export default leftColumn;
