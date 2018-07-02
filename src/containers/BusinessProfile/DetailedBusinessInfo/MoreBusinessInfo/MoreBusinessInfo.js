import React from 'react';

const moreBusinessinfo = (props) => {

    return (
        <div className="info more_detail">
          <div className="info_heading">
            <div className="icon">
              icon
            </div>
            <div className="title">
              <h3>More details</h3>
            </div>
          </div>
          <div className="description">
            <div>
              <h4>Products</h4>
              <p>{ props.products_range }</p>
            </div>

            <div>
              <h4>Brands</h4>
              <p>{ props.product_brands }</p>
            </div>

            <div>
              <h4>Open Hours</h4>
              <p>Weekdays: { '0600hrs - 2000hrs' }</p>
              <p>Weekends: { '0800hrs - 1800hrs' }</p>
            </div>

            <div>
              <h4>Methods of payment</h4>
              <p>{ props.payment_methods }</p>
            </div>
          </div>
        </div>
    );
}


export default moreBusinessinfo;
