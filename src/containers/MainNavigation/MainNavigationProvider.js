import React from 'react';
import { PropTypes } from 'prop-types';

class MainNavContextProvider extends React.Component {
    getChildContext() {
        return {
            state: this.props.state,
            handleToggleSideDrawer: this.props.handleToggleSideDrawer,
            handleUserGettingStarted: this.props.handleUserGettingStarted
        }
    }

    render() {
        return this.props.children;
    }
}

MainNavContextProvider.childContextTypes = {
    state: PropTypes.object.isRequired,
    handleToggleSideDrawer: PropTypes.func.isRequired,
    handleUserGettingStarted: PropTypes.func.isRequired

}

export default MainNavContextProvider;
