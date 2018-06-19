import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
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
        console.log(this.state.sideDrawerOpen);
    }

    render(){
        const open = this.state.sideDrawerOpen;

        return (
            <Aux>
                <SideDrawer open={ open } />
                <div className='top-bar'>
                    <Toolbar click={ this.handleToggleSideDrawer.bind(this) }/>
                </div>
            </Aux>
        );
    }
}

export default MainNavigation;
