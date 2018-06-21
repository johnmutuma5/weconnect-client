import React from 'react';
import Aux from '../../hoc/Aux';
import MainNavigation from '../../containers/MainNavigation/MainNavigation';
import Footer from './Footer/Footer';

import './Layout.css';

const layout = (props) => (
    <Aux>
        <MainNavigation />
        <div className="content">
            <div className='container main-content'>
                <main>
                    { props.children }
                </main>
            </div>
            <Footer />
        </div>
    </Aux>
);

export default layout;
