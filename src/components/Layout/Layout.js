import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <header>
            <Toolbar />
        </header>
        <div>
            SideDrawer,
            Backdrop
        </div>
        <div className='wrapper'>
            <main>
                { props.children }
            </main>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <footer>
            <div className="Copyright">
              <p className="zeroBottom"> &copy; 2018 WeConnect, All Rights Reserved.</p>
            </div>
        </footer>
    </Aux>
);

export default layout;
