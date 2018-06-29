import React from 'react';
import LayoutContextProvider from './LayoutContextProvider';
import Navigation from '../../components/Navigation/Navigation';
import GettingStarted from '../Auth/GettingStarted';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Footer from './Footer/Footer';

import './Layout.css';


function toggleSideDrawer(state, props) {
    state = {...state};
    let currentOpenState = state.sideDrawerOpen;
    // update state
    state.sideDrawerOpen = !currentOpenState;
    return state;
}



class Layout extends React.Component {
    constructor(props){
        super();
        this.state = {
            sideDrawerOpen: false,
            userGettingStarted: false
        }
    }

    handleToggleSideDrawer() {
        this.setState(toggleSideDrawer);
    }

    toggleUserGettingStarted(e) {
        this.setState({userGettingStarted: !this.state.userGettingStarted})
    }

    render() {
        const context = {
            state: this.state,
            handleToggleSideDrawer: this.handleToggleSideDrawer.bind(this),
            toggleUserGettingStarted: this.toggleUserGettingStarted.bind(this)
        }

        let gettingStarted = <GettingStarted />

        if (this.state.userGettingStarted)
            gettingStarted = <GettingStarted
                                visible={this.state.userGettingStarted} />
        return (
            <LayoutContextProvider {...context} >
                <Navigation />
                <div className="content">
                    <div className='container main-content'>
                        <main>
                            <section>
                                { this.props.children }
                            </section>
                        </main>
                    </div>
                    { gettingStarted }
                    <Backdrop
                        active={this.state.userGettingStarted}
                        id={ 'GettingStartedBackdrop' }
                        click={this.toggleUserGettingStarted.bind(this)}/>
                    <Footer />
                </div>
            </LayoutContextProvider>
        );
    }
}

export default Layout;
