import React from 'react';
import Form, {formProcessComplete, formProcessFailed} from '../../../components/UI/Form';
import {createAccount} from '../../../store/resources/auth';

import './UserRegistrationForm.css';

class UserRegistrationForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            values: {
                first_name: '',
                last_name: '',
                username: '',
                password: '',
                mobile: '',
                email: '',
                gender: ''
            }
        }
    }

    onSubmit(e) {
        e.preventDefault()
        createAccount(this.state.values)
            .then((response) => {
                const msg = response.msg;
                const next = '/businesses';
                this.setState(formProcessComplete(msg), this.redirect(next));
            })
            .catch((error) => {
                const msg = error.msg;
                this.setState(formProcessFailed(msg));
            });
    }

    redirect(path) {
        // returns a timed-out callback function for setState
        return () => {
            setTimeout(()=>this.props.history.push(path) ,1500);
        }
    }

    render() {

        let classes = ['UserRegistrationForm'];

        let form = <Form
                        formContext = { this }
                        loadElements = { this.loadElements.bind(this) }
                        onSubmit = { this.onSubmit.bind(this) } />
        return (
            <div className={ classes.join(' ') }>
                <article className="form_container">
                    <div className='form_header'>
                      <p>{ 'Register a user account' }</p>
                    </div>
                    { form }
                </article>
            </div>
        );
    }

    loadElements() {
        return [
            {
                elementType: 'fieldset',
                key: 1,
                children: [
                    {
                        elementType: 'legend',
                        children: 'Basic and Contact Data'
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            name: 'first_name',
                            placeholder: 'First Name',
                            type: 'text',
                            value: this.state.values.first_name
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            name: 'last_name',
                            placeholder: 'Last Name',
                            type: 'text',
                            value: this.state.values.last_name
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            name: 'gender',
                            placeholder: 'Gender',
                            type: 'text',
                            value: this.state.values.gender
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            name: 'email',
                            placeholder: 'Email',
                            type: 'email',
                            value: this.state.values.email
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            name: 'mobile',
                            placeholder: 'Mobile No.',
                            type: 'text',
                            value: this.state.values.mobile
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
                        children: 'Login Details'
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            name: 'username',
                            placeholder: 'Username',
                            type: 'text',
                            value: this.state.values.username
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            name: 'password',
                            placeholder: 'Password',
                            type: 'password',
                            value: this.state.values.password
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
                            name: 'submit',
                            value: 'Submit',
                            type: 'submit'
                        }
                    }
                ]
            }
        ]
    }
}

export default UserRegistrationForm;
