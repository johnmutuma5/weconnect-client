import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <div>
            <Toolbar />
            SideDrawer,
            Backdrop
        </div>
        <main>
            { props.children }
        </main>
        <div>Footer</div>
    </Aux>
);

export default layout;
