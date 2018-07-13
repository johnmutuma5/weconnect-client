import React from 'react';
import SearchField from './SearchField/SearchField';
import BusinessesFilter from '../BusinessesFilter/BusinessesFilter';
import Aux from '../../hoc/Aux';

class SearchBusinesses extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Aux>
                <section className='SearchField'>
                    <SearchField />
                </section>
                <BusinessesFilter />
            </Aux>
        );
    }
}

export default SearchBusinesses;
