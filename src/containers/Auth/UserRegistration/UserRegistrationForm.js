import React from 'react';
import { withRouter } from 'react-router-dom';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';
import {createAccount} from '../../../store/resources/auth';
import Modal from '../../../components/UI/Modal/Modal';
import Prompt from '../Prompt/Prompt';

// import './UserRegistrationForm.css';

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
        const modalTitle = 'Register a user account';
        let form = <Form
                        formContext = { this }
                        loadElements = { this.loadElements.bind(this) }
                        onSubmit = { this.onSubmit.bind(this) } />
        return (
            <Modal title={ modalTitle } isVisible={this.props.isVisible}>
            <Prompt
                ask={'Already have an account?'}
                handleClicked={ this.props.handleReadyToLogin} >
                { 'Login' }</Prompt>
            { form }
            </Modal>
        );
    }

    loadElements() {
        return [
            {
                elementType: 'fieldset',
                key: 'usrreg1',
                children: [
                    {
                        elementType: 'legend',
                        children: 'Basic and Contact Data'
                    },
                    formInput('text', 'first_name', this.state.values.first_name, 'First Name'),
                    formInput('text', 'last_name', this.state.values.last_name, 'Last Name'),
                    formInput('text', 'gender', this.state.values.gender, 'Gender'),
                    formInput('email', 'email', this.state.values.email, 'Email'),
                    formInput('text', 'mobile', this.state.values.mobile, 'Mobile No.')
                ]
            },
            {
                elementType: 'fieldset',
                key: 'usrreg2',
                children: [
                    {
                        elementType: 'legend',
                        children: 'Login Details'
                    },
                    formInput('text', 'username', this.state.values.username, 'Username'),
                    formInput('password', 'password', this.state.values.password, 'Password')
                ]
            },
            {
                elementType: 'fieldset',
                key: 'usrreg3',
                children: [
                    formInput('submit', 'submit', 'Submit', undefined)
                ]
            }
        ]
    }
}

export default withRouter(UserRegistrationForm);
