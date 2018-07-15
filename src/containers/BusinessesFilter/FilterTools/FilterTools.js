import React from 'react';
import FilterForm from './FilterForm';
import './FilterTools.css';

class FilterTools extends React.Component {
    render() {
        return (
            <div className='FilterTools'>
                <div>{'filetes'}</div>
                <FilterForm />
            </div>
        )
    }
}

export default FilterTools;
