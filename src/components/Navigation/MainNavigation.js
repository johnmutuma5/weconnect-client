import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';
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
        const open = this.state.sideDrawerOpen;

        return (
            <Aux>
                <SideDrawer open={ open } />
                <Backdrop active={ open }
                          click={ this.handleToggleSideDrawer.bind(this) }/>
                <div className='top-bar'>
                    <Toolbar click={ this.handleToggleSideDrawer.bind(this) }
                             sideMenuTogglerVisible = { !open } />
                </div>
            </Aux>
        );
    }
}

export default MainNavigation;
