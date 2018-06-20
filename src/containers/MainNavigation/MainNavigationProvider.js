import React from 'react';
import { PropTypes } from 'prop-types';

class MainNavContextProvider extends React.Component {
    getChildContext() {
        return {
            state: this.props.state
        }
    }

    render() {
        return this.props.children;
    }
}

MainNavContextProvider.childContextTypes = {
    state: PropTypes.object.isRequired
}

export default MainNavContextProvider;
