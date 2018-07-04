import React from 'react';
import { withRouter } from 'react-router-dom';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';

import './SearchField.css';


class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                searchValue: ''
            }
        }
    }

    render() {

        return (
            <Form
                id={'search'}
                formContext={ this }
                loadElements={ this.loadElements.bind(this) }
                onSubmit={ this.onSubmit.bind(this) }/>
        )
    }

    loadElements() {
        return [
            formInput('text', 'searchValue', this.state.values.searchValue,
                'Search weConnect')
        ]
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.values)
    }
}


export default withRouter(SearchField);
