import React from 'react';

const primaryBusinessInfo = (props) => {
    return (
        <div className="business_details">
            <div className="quick_details draw-right">
                <h3>{ props.businessName }</h3>
                <hr />
                <div className="owner">
                    <p><span>Business Owner:</span> { props.ownerName }</p>
                </div>
                <div className="business_category">
                    <p><span>Business Category:</span> { props.category }</p>
                    <p><span>Specialization:</span> { props.specialization }</p>
                </div>
                <div className="location">
                    <p><span>{ 'Location' }:</span> { props.businessLocation } </p>
                </div>
                <div className="registration_date">
                    <p><span>Registration date:</span> { props.registrationDate } </p>
                </div>
            </div>
            <div className="background_overlay" />
        </div>
    );
}

export default primaryBusinessInfo;
