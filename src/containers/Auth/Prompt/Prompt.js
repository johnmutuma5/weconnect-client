import React from 'react';
import Button from '../../../components/UI/Button/Button';


const prompt = (props) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>{ props.ask }</div>
        <Button onClickHandler={ props.handleClicked }>{ props.children }</Button>
    </div>
);

export default prompt;
