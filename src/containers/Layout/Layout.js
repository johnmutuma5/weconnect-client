import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import Navigation from '../../components/Navigation/Navigation';
import GettingStarted from '../Auth/GettingStarted';
import Footer from './Footer/Footer';
import { initLayoutState, toggleGettingStarted } from '../../store/actions/actions';

import './Layout.css';


class Layout extends React.Component {
    constructor(props, context){
        super();
        this.store = context.store;
        this.state = this.store.layoutState;
        this.subscriptions = [
            'INIT_LAYOUT_STATE',
            'LOGIN_USER',
            'LOGOUT_USER',
            'TOGGLE_SIDE_DRAWER',
            'TOGGLE_GETTING_STARTED',
            'TOGGLE_REGISTERING_BUSINESS'
        ];
    }

    componentWillMount() {
        this.subscriptionsRevokers =
            this.store.subscribe(this.subscriptions, this.handleStateDidUpdate.bind(this));
        this.store.dispatch(initLayoutState());
    }

    componentWillUnmount() {
        for(let subscriptionRevoker of this.subscriptionsRevokers)
            subscriptionRevoker();
    }

    handleStateDidUpdate(state) {
        this.setState(state.layoutState);
    }

    shouldComponentUpdate(props) {
        return true;
    }

    render() {
        // prepare to render getting started elements
        let gettingStarted = null;
        if(this.state.userGettingStarted)
            gettingStarted =
                <GettingStarted visible={ this.state.userGettingStarted } />

        return (
            <Aux>
                <Navigation />
                <div className="content">
                    <div className='container main-content'>
                        <main>
                            { this.props.children }
                        </main>
                    </div>
                    { gettingStarted }
                </div>
            </Aux>
        );
    }
}

Layout.contextTypes = { store: PropTypes.object.isRequired }

export default Layout;
