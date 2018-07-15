import React from 'react';
import Form, { formInput } from '../../../components/UI/utils/Form';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.values
        }
    }

    render() {
        const status = this.props.status;
        const form = (
            <div className={ 'FilterToolsForm ' + status }>
                <Form
                    loadElements={ this.loadElements.bind(this) }
                    formContext={ this }
                    onInputChange={ () => this.props.handleFilterInput(this.state.values) }
                    onSubmit={ (e) => { e.preventDefault() } }/>
            </div>
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

}

export default FilterForm;
