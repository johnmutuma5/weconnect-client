import React from 'react';
import './SideMenuToggler.css';

const sideMenuToggler = (props) => {
    let classes = ["SideMenuToggler"]
    classes = props.visible ?
                classes.concat("visible") :
              classes.concat("invisible");

    return (
        <div className={ classes.join(' ') }
            onClick={ props.click }
            visible={ props.sideMenuTogglerVisible }>
                <span />
                <span />
                <span />
        </div>
    );
}

export default sideMenuToggler;
