import React from 'react';
import { withRouter } from 'react-router-dom';
import Form, { formInput } from '../../../components/UI/utils/Form';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                location: '',
                category: '',
                name: '',
            }
        }
    }

    render() {
        const form = (
            <Form
                loadElements={ this.loadElements.bind(this) }
                formContext={ this }
                onInputChange={ this.handleFilterInput.bind(this) }
                onSubmit={ (e) => { e.preventDefault() } }/>
        )

        return form
    }

    loadElements() {
        return [
            formInput('text', 'location', this.state.values.location, 'Location'),
            formInput('text', 'category', this.state.values.category, 'Category'),
            formInput('text', 'name', this.state.values.name, 'Name')
        ]
    }

    handleFilterInput() {
        const query = this.generateQueryString(this.state.values);
        this.props.history.push({
            pathname: '/businesses/filter',
            search: '?'+query
        })
    }

    generateQueryString(queryObj) {
        let queryStringParts = [];
        for(let key in this.state.values){
            if(!this.state.values.hasOwnProperty(key) || !this.state.values[key].length)
                continue
            queryStringParts =
                queryStringParts
                    .concat(key + '=' + encodeURIComponent(this.state.values[key]))
        }
        return queryStringParts.join('&');
    }
}

export default withRouter(FilterForm);
