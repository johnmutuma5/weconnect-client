import React from 'react';
import Form, {formProcessComplete, formProcessFailed} from '../../../components/UI/Form';
import Prompt from '../Prompt/Prompt';

import './UserLoginForm.css';


class UserLoginForm extends React.Component {

    constructor(props) {
        super();
        this.state = {
            values: {
                username: '',
                password: ''
            }
        }
    }

    onSubmit(e) {
        e.preventDefault()
        // createAccount(this.state.values)
        //     .then((response) => {
        //         const msg = response.msg;
        //         const next = '/businesses';
        //         this.setState(formProcessComplete(msg), this.redirect(next));
        //     })
        //     .catch((error) => {
        //         const msg = error.msg;
        //         this.setState(formProcessFailed(msg));
        //     });
    }

    redirect(path) {
        // returns a timed-out callback function for setState
        return () => {
            setTimeout(()=>this.props.history.push(path) ,1500);
        }
    }

    render() {

        let classes = ['UserLoginForm'];
        classes = this.props.isVisible ?
                    classes.concat(['visible']) :
                    classes.concat(['invisible']);


        let form = <Form
                        formContext = { this }
                        loadElements = { this.loadElements.bind(this) }
                        onSubmit = { this.onSubmit.bind(this) } />
        return (
            <div className={ classes.join(' ') }>
                <Prompt
                    ask={'No account yet?'}
                    handleClicked={ this.props.handleReadyToSignUp } >
                    { 'Sign up' }</Prompt>
                <article className="form_container">
                    <div className='form_header'>
                      <p>{ 'Login' }</p>
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
                key: 2,
                children: [
                    {
                        elementType: 'legend',
                        children: 'Username and Password'
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

export default UserLoginForm;
