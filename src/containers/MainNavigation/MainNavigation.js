import React from 'react';
import MainNavContextProvider from './MainNavigationProvider';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
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
        }
    }

    handleToggleSideDrawer() {
        this.setState(toggleSideDrawer);
    }

    render(){
        const context = {
            state: this.state,
            handleToggleSideDrawer: this.handleToggleSideDrawer.bind(this)
        }

        return (
            <MainNavContextProvider { ...context } >
                <SideDrawer open = { this.state.sideDrawerOpen }/>
                <Backdrop id={ 'SideDrawerBackDrop' } />
                <div className='top-bar'>
                    <Toolbar />
                </div>
            </MainNavContextProvider>
        );
    }
}

export default MainNavigation;
