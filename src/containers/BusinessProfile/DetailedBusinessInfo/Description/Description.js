import React from 'react';

const description = (props) => {
    return (
        <div className="info about">
          <div className="info_heading">
            <div className="icon">
              icon
            </div>

            <div className="title">
              <h3>About { props.business_name }</h3>
            </div>
          </div>

          <div className="description">
            <p>{ props.description }</p>
          </div>
        </div>
    );
}


export default description;
