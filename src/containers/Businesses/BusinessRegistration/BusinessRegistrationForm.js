import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../../../components/UI/Form';

import './BusinessRegistrationForm.css';

function registrationComplete(response) {
    return (state, props) => (
        {
            success_message: response.msg,
            successful: true,
            submitting: false
        }
    )
}

function resetForm() {
    return setTimeout(() => {
        this.setState({
            submitting: false,
            successful: false,
            success_message: '',
            failed: false,
            error_message: ''
        })
    }, 5000)
}

class BusinessRegistrationForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            values: {
                name: '',
                location: '',
                mobile: '',
                category:''
            },
            submitting: false,
            successful: false,
            success_message: '',
            failed: false,
            error_message: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({submitting: true})
        this.props.onSubmit(this.state.values)
            .then((response) => {
                this.setState(registrationComplete(response), resetForm.bind(this))
            })
            .catch((error) => {
                this.setState({failed: true, error_message: error.msg, submitting: false}, resetForm.bind(this))
            })
    }

    render() {
        let classes = ['BusinessRegistrationForm']
        classes = this.props.active ?
                    classes.concat('active') :
                  classes.concat('inactive');

        let form = <Form
                        className='business_registration'
                        loadElements={ this.loadFormElements.bind(this) }
                        formContext = { this }
                        onSubmit={ this.onSubmit.bind(this) }/>


        if (this.state.successful)
            form = this.state.success_message

        if(this.state.failed){
            console.log(this.state.error_message)
            form = this.state.error_message
        }

        if (this.state.submitting)
            form = 'processing'

        form = this.state.successful ? this.state.success_message : form;
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

    loadFormElements() {
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

export default withRouter(BusinessRegistrationForm);
