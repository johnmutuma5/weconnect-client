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
        const data = this.filterEmptyFields(this.state.values);
        console.log(data);
        this.props.onSubmit(data)
            .then(response => {
                const msg = response.msg;
                this.setState(formProcessComplete(msg));
                this.props.refreshBusinessInfo();
            })
            .catch(err => {
                const msg = err.msg;
                this.setState(formProcessFailed(msg))
            })
    }

    filterEmptyFields(formData) {
        let data = {};
        for (let [key, value] of Object.entries(formData)){
            if(!value)
                continue
            data[key] = value;
        }
        return data;
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
