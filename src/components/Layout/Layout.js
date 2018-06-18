import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import Footer from './Footer/Footer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div className="content">
            <section>
                SideDrawer,
                Backdrop
            </section>
            <div className='wrapper'>
                <main>
                    { props.children }
                </main>
            </div>
            <Footer />
        </div>
    </Aux>
);

export default layout;
