import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { weConnectLoginUser } from '../../../store/resources/auth';
import { loginUserAction } from '../../../store/actions/actions';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';
import Prompt from '../Prompt/Prompt';

import './UserLoginForm.css';


class UserLoginForm extends React.Component {

    constructor(props, context) {
        super();
        this.state = {
            values: {
                username: '',
                password: ''
            }
        }
        this.store = context.store;
        console.log(context);
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({submitting: true});
        // login user in the API; get's a promise for a future  async response
        weConnectLoginUser(this.state.values)
            .then((response) => {
                const msg = response.msg;
                const next = '/';
                // update application state with auth access_token credentials
                const action = loginUserAction(response.access_token);
                this.store.dispatch(action);
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
            setTimeout(()=>{
                this.props.history.push(path);
                this.context.toggleUserGettingStarted();
            } ,1500);
        }
    }

    render() {

        let userLoginCssClass = ['UserLoginForm'];
        userLoginCssClass = this.props.isVisible ? userLoginCssClass.concat(['visible']) : userLoginCssClass.concat(['invisible']);


        let form = <Form
                        formContext = { this }
                        loadElements = { this.loadElements.bind(this) }
                        onSubmit = { this.onSubmit.bind(this) } />
        return (
            <div className={ userLoginCssClass.join(' ') }>
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
                key: 'userloginform1',
                children: [
                    {
                        elementType: 'legend',
                        children: 'Username and Password'
                    },
                    formInput('text', 'username', this.state.values.username, 'Username'),
                    formInput('password', 'password', this.state.values.password, 'Password')
                ]
            },
            {
                elementType: 'fieldset',
                key: 'userloginform2',
                children: [
                    formInput('submit', 'submit', 'Submit', undefined)
                ]
            }
        ]
    }
}

UserLoginForm.contextTypes = {
    toggleUserGettingStarted: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired
}

export default withRouter(UserLoginForm);
