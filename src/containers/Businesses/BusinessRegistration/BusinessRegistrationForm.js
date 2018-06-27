import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../../../components/UI/Form';
import Message from '../../../components/UI/Message/Message';

import './BusinessRegistrationForm.css';

class BusinessRegistrationForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            values: {
                name: '',
                location: '',
                mobile: '',
                category:''
            }
        }
    }

    render() {
        // define classes form styling the form with css
        let classes = ['BusinessRegistrationForm']
        classes = this.props.active ?
                    classes.concat('active') :
                  classes.concat('inactive');

        // create the form to present to client
        // use withMessage to replace the form with an API message container
        // messages are loaded onSubmit
        const form = this.withMessages(
            <Form
                className='business_registration'
                loadElements={ this.loadFormElements.bind(this) }
                formContext = { this }
                onSubmit={ this.onSubmit.bind(this) }/>);

        return (
            <div className={ classes.join(' ') }>
                <article className="form_container">
                    <div className='form_header'>
                      <p>{ 'Register your business' }</p>
                    </div>
                    { form }
                </article>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({submitting: true})
        this.props.onSubmit(this.state.values)
            .then((response) => {
                // construct a path to the new business's profile page
                const business_id = response.id;
                const path = this.props.match.path + '/'+ business_id;
                const msg = response.msg;
                // update form state and redirect the user to the path above
                this.setState(registrationComplete(msg), this.redirect(path));
            })
            .catch((error) => {
                this.setState(registrationFailed(error), this.resetForm)
            })
    }

    redirect(path) {
        return () => {
            setTimeout(() => this.props.history.push(path), 3000)
        }
    }

    withMessages(form) {
        if (this.state.successful)
            form = (<Message type={'success'}>
                        { this.state.success_message }
                    </Message>);

        if(this.state.failed)
            form = (<Message type={'error'}>
                        { this.state.error_message }
                    </Message>);

        if (this.state.submitting)
            form = (<Message type={'info'}>
                        { 'Processing. Please wait.' }
                    </Message>);

        return form
    }

    resetForm() {
        // resets form after displaying the message for 4 seconds
        // useful in case the message is an error message from API
        return setTimeout(() => {
            this.setState({
                submitting: false,
                successful: false,
                failed: false,
            })}, 4000);
    }

    loadFormElements() {
        // the form construct requires a function that returns an array of
        // form element as JavaScript Objects. It uses this Array to generate a
        // HTML form
        return [
            {
                elementType: 'fieldset',
                key: 1,
                children: [
                    {
                        elementType: 'legend',
                        value: 'Basic Business Details'
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: 'text',
                            name: 'name',
                            value: this.state.values.name,
                            placeholder: 'Enter business name'
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: 'text',
                            name: 'location',
                            value: this.state.values.location,
                            placeholder: 'Enter business location'
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: 'text',
                            name: 'category',
                            value: this.state.values.category,
                            placeholder: 'Enter business category'
                        }
                    }
                ]
            },
            {
                elementType: 'fieldset',
                key: 2,
                children: [
                    {
                        elementType: 'legend',
                        value: 'Business Contact Details'
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: "text",
                            name: "mobile",
                            value: this.state.values.mobile,
                            placeholder: "Enter mobile number"
                        }
                    }
                ]
            },
            {
                elementType: 'fieldset',
                key: 3,
                children: [
                    {
                        elementType: 'input',
                        attributes: {
                            type: "submit",
                            name: "submit",
                            value: "Register business"
                        }
                    }
                ]
            }
        ]
    }
}

function registrationComplete(response) {
    // return a function for functional setState
    return (state, props) => (
        {
            successful: true,
            success_message: response.msg,
            submitting: false
        }
    );
};

function registrationFailed(error) {
    // return a function for functional setState
    return (state, props) => (
        {
            failed: true,
            error_message: error.msg,
            submitting: false
        }
    )
}

export default withRouter(BusinessRegistrationForm);
