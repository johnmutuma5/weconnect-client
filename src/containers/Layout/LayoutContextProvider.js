import React from 'react';
import { PropTypes } from 'prop-types';

class LayoutContextProvider extends React.Component {
    getChildContext() {
        return {
            state: this.props.state,
            handleToggleSideDrawer: this.props.handleToggleSideDrawer,
            toggleUserGettingStarted: this.props.toggleUserGettingStarted
        }
    }

    render() {
        return this.props.children;
    }
}

LayoutContextProvider.childContextTypes = {
    state: PropTypes.object.isRequired,
    handleToggleSideDrawer: PropTypes.func.isRequired,
    toggleUserGettingStarted: PropTypes.func.isRequired

}

export default LayoutContextProvider;
