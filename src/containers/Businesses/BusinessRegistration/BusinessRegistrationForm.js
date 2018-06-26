import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../../../components/UI/Form';

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

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.values);
    }

    render() {
        let classes = ['BusinessRegistrationForm']
        classes = this.props.active ?
                    classes.concat('active') :
                  classes.concat('inactive');
        return (
            <div className={ classes.join(' ') }>
                <article className="form_container">
                    <div className='form_header'>
                      <p>{ 'Register your business' }</p>
                    </div>

                    <Form
                        className='business_registration'
                        loadElements={ this.loadFormElements.bind(this) }
                        formContext = { this }
                        onSubmit={ this.onSubmit.bind(this) }/>
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
