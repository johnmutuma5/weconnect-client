import React from 'react';
import PropTypes from 'prop-types';
import LayoutContextProvider from './LayoutContextProvider';
import Navigation from '../../components/Navigation/Navigation';
import GettingStarted from '../Auth/GettingStarted';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
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
            'TOGGLE_SIDE_DRAWER',
            'TOGGLE_GETTING_STARTED'
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

    render() {
        const store = this.context.store;

        // prepare to render getting started elements
        let gettingStarted = null;
        if(this.state.userGettingStarted)
            gettingStarted =
                <GettingStarted visible={this.state.userGettingStarted} />

        return (
            <LayoutContextProvider layoutState={ this.state } >
                <Navigation />
                <div className="content">
                    <div className='container main-content'>
                        <main>
                            { this.props.children }
                        </main>
                    </div>
                    { gettingStarted }
                    <Backdrop
                        active={this.state.userGettingStarted}
                        id={ 'GettingStartedBackdrop' }
                        click={ () => store.dispatch(toggleGettingStarted()) }/>
                    <Footer />
                </div>
            </LayoutContextProvider>
        );
    }
}

Layout.contextTypes = {
    store: PropTypes.object.isRequired
}


export default Layout;
