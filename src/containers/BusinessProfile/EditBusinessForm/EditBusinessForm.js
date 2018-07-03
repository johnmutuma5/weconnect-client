import React from 'react';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';
import Modal from '../../../components/UI/Modal/Modal';


class EditBusinessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
                caterory: '',
                location: ''
            }
        }
    }

    render() {
        const modalTitle = 'Edit Business Information';
        const form = <Form
                        loadElements={ this.loadFormElements.bind(this) }
                        formContext = { this }
                        onSubmit={ this.onSubmit.bind(this) }/>;

        return (
            <Modal title={ modalTitle } isVisible={ this.props.visible } >
                { form }
            </Modal>
        )

    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.values);
    }

    loadFormElements() {
        return [
            formInput('text', 'name', this.state.values.name, 'Name'),
            formInput('text', 'category', this.state.values.category, 'Category'),
            formInput('text', 'location', this.state.values.location, 'Location'),
            formInput('submit', 'submit', 'Submit', undefined)
        ]
    }
}


export default EditBusinessForm;
