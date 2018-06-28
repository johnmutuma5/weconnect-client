import React from 'react';
import UserRegistrationForm from './UserRegistration/UserRegistrationForm';
import UserLoginForm from './UserLogin/UserLoginForm';

class GettingStarted extends React.Component {

    constructor(props) {
        super();
        this.state = {
            startBy: 'signUp'
        }
    }

    handleReadyToLogin(e) {
        this.setState({startBy: 'login'});
    }

    handleReadyToSignUp(e) {
        this.setState({startBy: 'signUp'});
    }

    render() {
        let form = <UserRegistrationForm
                        isVisible={ this.props.visible }
                        handleReadyToLogin={ this.handleReadyToLogin.bind(this) }/>
        switch (this.state.startBy) {
            case 'signUp':
                break;
            case 'login':
                form = <UserLoginForm
                            isVisible={ this.props.visible }
                            handleReadyToSignUp={ this.handleReadyToSignUp.bind(this) }/>;
                break;
            case 'resetPassword':
                form = 'resetPassword';
                break;
            default:

        }
        return form;
    }
}


export default GettingStarted;
