import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import { initSearchState, searchName } from '../../../store/actions/actions';
import SearchIcon from '../../../components/UI/SearchIcon/SearchIcon';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';

import './SearchField.css';


class SearchField extends React.Component {
    constructor(props, context) {
        super(props);
        this.store = context.store;
        this.state = {};
        this.subscriptions = [
            'INIT_SEARCH_STATE',
            'SEARCH_NAME'
        ];
    }

    componentWillMount() {
        // subscribe to store events
        this.subscriptionsRevokers = this.store.subscribe(
            this.subscriptions, this.handleStateDidUpdate.bind(this))
        this.store.dispatch(initSearchState());
    }

    handleStateDidUpdate(state) {
        this.setState(state.searchFieldState);
    }

    componentWillUnmount() {
        for(let subscriptionRevoker of this.subscriptionsRevokers)
            subscriptionRevoker();
    }

    render() {
        let searchClasses = ['Search'];
        searchClasses = this.state.searchVisible ?
                            searchClasses.concat(['visible']) :
                            searchClasses.concat(['hidden']);

        return (
            <div className={searchClasses.join(' ')}>
                <div
                    onClick={ this.toggleInputBar.bind(this) }
                    className='SearchIcon'>
                        <SearchIcon />
                    </div>
                <Form
                    formContext={ this }
                    loadElements={ this.loadElements.bind(this) }
                    onInputBlur={ this.onInputBlur }
                    onInputChange={ (e) => {console.log(this.state)} }
                    onSubmit={ this.onSubmit.bind(this) }/>
            </div>
        )
    }

    loadElements() {
        return [
            formInput('text', 'searchValue', this.state.values.searchValue,
                'Search weConnect')
        ]
    }

    onSubmit(e) {
        e.preventDefault();
        this.toggleInputBar();
        this.processFormData(this.state.values);
    }

    processFormData(data) {
        this.store.dispatch(searchName(data.searchValue));
        this.props.history.push(`/businesses/search?name=${data.searchValue}`)
    }

    toggleInputBar() {
        this.setState({searchVisible: !this.state.searchVisible});
    }

    onInputBlur = () => {
        this.toggleInputBar();
    }
}

SearchField.contextTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(SearchField);
