import React from 'react';
import PropTypes from 'prop-types';
import FilterForm from './FilterForm';
import { initFilterToolsState } from '../../../store/actions/actions';

import './FilterTools.css';

class FilterTools extends React.Component {
    constructor(props, context) {
        super(props);
        this.store = context.store;
        this.state = {};
        this.subscriptions = [
            'INIT_FILTER_TOOLS_STATE'
        ]
    }

    componentWillMount() {
        this.subscriptionsRevokers =
            this.store.subscribe(this.subscriptions, this.handleStateDidUpdate.bind(this));
        this.store.dispatch(initFilterToolsState());
    }

    handleStateDidUpdate(state) {
        this.setState(state.filterToolsState);
    }

    componentWillUnmount() {
        for(let revoker of this.subscriptionsRevokers)
            revoker()
    }

    render() {
        return (
            <div className='FilterTools'>
                <div>{'Filter'}</div>
                <FilterForm values={ this.state.filters } />
            </div>
        )
    }
}

FilterTools.contextTypes = {
    store: PropTypes.object.isRequired
}

export default FilterTools;
