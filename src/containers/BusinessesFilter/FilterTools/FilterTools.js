import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilterForm from './FilterForm';
import { initFilterToolsState, updateFilterValues } from '../../../store/actions/actions';

import './FilterTools.css';

class FilterTools extends React.Component {
    constructor(props, context) {
        super(props);
        this.store = context.store;
        this.state = {};
        this.subscriptions = [
            'INIT_FILTER_TOOLS_STATE',
            'UPDATE_FILTER_VALUES'
        ]
    }

    componentWillMount() {
        this.subscriptionsRevokers =
            this.store.subscribe(this.subscriptions, this.handleStateDidUpdate.bind(this));
        this.store.dispatch(initFilterToolsState());
    }

    handleStateDidUpdate(state) {
        const filterToolsState = state.filterToolsState;
        this.setState(filterToolsState);
    }

    componentWillUnmount() {
        for(let revoker of this.subscriptionsRevokers)
            revoker()
    }

    render() {
        const status = this.state.filterFormActive || this.props.loadsActive ?
                            'active' :
                            'inactive'
        return (
            <div className={ 'FilterTools' }>
                <div
                    className={ 'FilterHeader ' + status }
                    onClick={ this.toggleFilterFormActive.bind(this) }>
                    {'Filter by...'}
                </div>
                <FilterForm
                    status={ status }
                    values={ this.state.filters }
                    handleFilterInput={ this.handleFilterInput.bind(this) } />
            </div>
        )
    }

    toggleFilterFormActive() {
        this.setState({filterFormActive: !this.state.filterFormActive});
    }

    fetchFilterResults = (filters) => (
        () => {
            const query = this.generateQueryString(filters);
            this.props.history.push({
                pathname: '/businesses/filter',
                search: '?'+query
            })
        }
    );

    handleFilterInput(inputData) {
        const delay = this.props.atBusinesses ?
                        3000 :
                        0;
        this.store.dispatch(updateFilterValues(inputData));
        setTimeout(() => this.fetchFilterResults(inputData)(), delay);
    }

    generateQueryString(queryObj) {
        let queryStringParts = [];
        for(let key in queryObj){
            if(!queryObj.hasOwnProperty(key) || !queryObj[key].length)
                continue
            queryStringParts =
                queryStringParts
                    .concat(key + '=' + encodeURIComponent(queryObj[key]))
        }
        return queryStringParts.join('&');
    }
}

FilterTools.contextTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(FilterTools);
