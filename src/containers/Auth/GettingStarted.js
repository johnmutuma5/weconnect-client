import React from 'react';
import PropTypes from 'prop-types';
import UserRegistrationForm from './UserRegistration/UserRegistrationForm';
import UserLoginForm from './UserLogin/UserLoginForm';
import { toggleGettingStarted } from '../../store/actions/actions';
import Button from '../../components/UI/Button/Button';

class GettingStarted extends React.Component {

    constructor(props) {
        super();
        this.state = {
            startBy: 'signUp'
        }
    }

    render() {
        let form = <UserRegistrationForm
                        isVisible={ this.props.visible }
                        handleReadyToLogin={ this.handleReadyToLogin.bind(this) }/>
        // switch form between sign up, login and reset password
        form = this.switchForm(form);
        return form;
    }


    handleReadyToLogin(e) {
        this.setState({startBy: 'login'});
    }

    handleReadyToSignUp(e) {
        this.setState({startBy: 'signUp'});
    }

    switchForm(form) {
        switch (this.state.startBy) {
            case 'login':
                form = <UserLoginForm
                            isVisible={ this.props.visible }
                            handleReadyToSignUp={ this.handleReadyToSignUp.bind(this) }/>;
                break;
            case 'resetPassword':
                form = 'resetPassword'; // to add this form
                break;
            default:

        }
        return form;
    }
}

export const GettingStartedButton = (props, context) => {
    const store = context.store;
    const click = () => store.dispatch(toggleGettingStarted());
    return (
        <Button id={props.id}
                type='dark'
                onClickHandler={ click }>
                    { 'Get Started' }
        </Button>
    )
}

GettingStartedButton.contextTypes = {
    store: PropTypes.object.isRequired
}


export default GettingStarted;
