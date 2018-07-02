import React from 'react';
import Button from '../../../components/UI/Button/Button';


const prompt = (props) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px 0'
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>{ props.ask }</div>
        <Button type={'dark'} onClickHandler={ props.handleClicked }>{ props.children }</Button>
    </div>
);

export default prompt;
