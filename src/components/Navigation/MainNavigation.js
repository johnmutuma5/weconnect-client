import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import './MainNavigation.css';

class MainNavigation extends React.Component {
    constructor(props){
        super();
        this.state = {
            sideDrawerOpen: true,
        }
    }

    render(){
        const open = this.state.sideDrawerOpen;

        return (
            <Aux>
                <SideDrawer open={ open } />
                <div className='top-bar'>
                    <Toolbar />
                </div>
            </Aux>
        );
    }
}

export default MainNavigation;
