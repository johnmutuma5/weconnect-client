import React from 'react';
import PropTypes from 'prop-types';

class ResourcesProvider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}


ResourcesProvider.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default ResourcesProvider;
