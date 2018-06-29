import React from 'react';
import MainNavContextProvider from './MainNavigationProvider';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import GettingStarted from '../Auth/GettingStarted'
import './MainNavigation.css';


function toggleSideDrawer(state, props) {
    state = {...state};
    let currentOpenState = state.sideDrawerOpen;
    // update state
    state.sideDrawerOpen = !currentOpenState;
    return state;
}


class MainNavigation extends React.Component {
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

    render(){
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
            <MainNavContextProvider { ...context } >
                <SideDrawer />
                <Backdrop
                    active={this.state.sideDrawerOpen}
                    id={ 'SideDrawerBackDrop' }
                    click={this.handleToggleSideDrawer.bind(this)}/>

                <div className='top-bar'>
                    <Toolbar />
                </div>

                { gettingStarted }
                <Backdrop
                    active={this.state.userGettingStarted}
                    id={ 'GettingStartedBackdrop' }
                    click={this.toggleUserGettingStarted.bind(this)}/>
            </MainNavContextProvider>
        );
    }
}

export default MainNavigation;
