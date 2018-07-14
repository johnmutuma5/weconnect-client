import React from 'react';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';
import Modal from '../../../components/UI/Modal/Modal';


class EditBusinessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: '',
                category: '',
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

    componentWillReceiveProps(nextProps) {
        const currentData = nextProps.currentData;
        this.setState({
            ...this.state,
            values: {
                name: currentData.name,
                location: currentData.location,
                category: currentData.category
            }
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const data = this.filterEmptyFields(this.state.values);
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
            formInput('text', 'name', this.state.values.name, 'Name [Optional]'),
            formInput('text', 'category', this.state.values.category, 'Category [Optional]'),
            formInput('text', 'location', this.state.values.location, 'Location [Optional]'),
            formInput('submit', 'submit', 'Submit', undefined)
        ]
    }
}


export default EditBusinessForm;
