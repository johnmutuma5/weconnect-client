import React from 'react';
import '../navigation.css';

const toolbar = () => {
    return (
        <header>
          <div className="toolbar">
            <div className="logo">
              <img src="" alt="WeConnect" />
            </div>
            <nav>
              <ul>
                <li><a href="#">Businesses</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Register Business</a></li>
                <li><a href="#">About WeConnect</a></li>
              </ul>
            </nav>
          </div>
        </header>);
}

export default toolbar;
