import React from 'react';
import Aux from '../../hoc/Aux';
import MainNavigation from '../../containers/MainNavigation/MainNavigation';
import './Layout.css';
import Footer from './Footer/Footer';

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
