import React from 'react';
import { withRouter } from 'react-router-dom';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';
import Modal from '../../../components/UI/Modal/Modal';

import './BusinessRegistrationForm.css';

class BusinessRegistrationForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            values: {
                name: '',
                location: '',
                mobile: '254',
                category:''
            }
        }
    }

    render() {
        // create the form to present to client
        // use withMessage to replace the form with an API message container
        // messages are loaded onSubmit
        const modalTitle = 'Introduce your Business. Free.'
        const form = <Form
                        loadElements={ this.loadFormElements.bind(this) }
                        formContext = { this }
                        onSubmit={ this.onSubmit.bind(this) }/>;

        return (
            <Modal title={ modalTitle } isVisible={ this.props.active } id='animateToThumbButton'>
                { form }
            </Modal>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({submitting: true});
        this.props.onSubmit(this.state.values)
            .then((response) => {
                // construct a path to the new business's profile page
                const business_id = response.id;
                const path = '/businesses/'+ business_id;
                const msg = response.msg;
                // update form state and redirect the user to the path above
                this.setState(formProcessComplete(msg), this.redirect(path));
            })
            .catch((error) => {
                const msg = error.msg;
                this.setState(formProcessFailed(msg))
            })
    }

    redirect(path, timeout=1500) {
        console.log(path);
        return () => {
            setTimeout(() => this.props.history.push(path), timeout)
        }
    }

    loadFormElements() {
        // the form construct requires a function that returns an array of
        // form element as JavaScript Objects. It uses this Array to generate a
        // HTML form
        return [
            {
                elementType: 'fieldset',
                key: 'busreg1',
                children: [
                    {
                        elementType: 'legend',
                        children: 'Basic Business Details'
                    },
                    formInput('text', 'name', this.state.values.name, 'Business Name'),
                    formInput('text', 'location', this.state.values.location, 'Business Location'),
                    formInput('text', 'category', this.state.values.category, 'Business Category')
                ]
            },
            {
                elementType: 'fieldset',
                key: 'busreg2',
                children: [
                    {
                        elementType: 'legend',
                        children: 'Business Contact Details'
                    },
                    formInput('text', 'mobile', this.state.values.mobile, 'Mobile No.')
                ]
            },
            {
                elementType: 'fieldset',
                key: 3,
                children: [
                    formInput('submit', 'submit', 'Register Business', undefined)
                ]
            }
        ]
    }
}

export default withRouter(BusinessRegistrationForm);
