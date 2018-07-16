import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilterForm from './FilterForm';
import { initFilterToolsState,
         updateFilterValues,
         toggleFilterForm } from '../../../store/actions/actions';

import './FilterTools.css';

class FilterTools extends React.Component {
    constructor(props, context) {
        super(props);
        this.store = context.store;
        this.state = {};
        this.subscriptions = [
            'INIT_FILTER_TOOLS_STATE',
            'UPDATE_FILTER_VALUES',
            'TOGGLE_FILTER_FORM'
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
        const status = this.state.filterFormActive ?
                            'active' :
                            'inactive'
        return (
            <div
                className={ 'FilterTools' }
                onMouseOver={ this.toggleFilterFormActive.bind(this) }
                onMouseOut={ this.toggleFilterFormActive.bind(this) }>
                <div
                    className={ 'FilterHeader ' + status }>
                    <i className="fa fa-filter"></i>{'Filter...'}
                </div>
                <FilterForm
                    status={ status }
                    values={ this.state.filters }
                    handleFilterInput={ this.handleFilterInput.bind(this) } />
            </div>
        )
    }

    toggleFilterFormActive() {
        this.store.dispatch(toggleFilterForm())
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
                        2200 :
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
