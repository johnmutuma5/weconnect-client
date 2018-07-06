import React from 'react';

import './PrimaryBusinessInfo.css';

const primaryBusinessInfo = (props) => {
    console.log(props)
    return (
        <div className="business_details">
            <article>
                <div className="quick_details draw-right">
                    <h3>{ props.name }</h3>
                    <hr />
                    <div className="owner">
                        <p><span>Business Owner:</span> { props.owner.name }</p>
                    </div>
                    <div className="business_category">
                        <p><span>Business Category:</span> { props.category }</p>
                        <p><span>Specialization:</span> { props.specialization }</p>
                    </div>
                    <div className="location">
                        <p><span>{ 'Location' }:</span> { props.location } </p>
                    </div>
                    <div className="mobile">
                        <p><span>{ 'Mobile' }:</span> { props.mobile } </p>
                    </div>
                    <div className="registration_date">
                        <p><span>Registration date:</span> { props.registrationDate } </p>
                    </div>
                </div>
            </article>
            <div className="background_overlay" />
        </div>
    );
}

export default primaryBusinessInfo;
