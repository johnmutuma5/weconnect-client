import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchField from './SearchField/SearchField';
import BusinessesFilter from '../BusinessesFilter/BusinessesFilter';
import Aux from '../../hoc/Aux';

class SearchBusinesses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Aux>
                <section className='SearchField'>
                    <SearchField onSubmit={ this.processFormData.bind(this) } />
                </section>
                <BusinessesFilter />
            </Aux>
        );
    }

    processFormData(data) {
        this.props.history.push(`/businesses/search?name=${data.searchValue}`)
    }
}

export default withRouter(SearchBusinesses);
