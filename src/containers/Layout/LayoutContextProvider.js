import React from 'react';
import { PropTypes } from 'prop-types';

class LayoutContextProvider extends React.Component {
    getChildContext() {
        return {
            layoutState: this.props.layoutState
        }
    }

    render() {
        return this.props.children;
    }
}

LayoutContextProvider.childContextTypes = {
    layoutState: PropTypes.object.isRequired
}

export default LayoutContextProvider;
