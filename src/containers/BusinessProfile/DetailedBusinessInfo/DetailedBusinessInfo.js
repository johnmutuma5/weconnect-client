import React from 'react';
import Aux from '../../../hoc/Aux';
import BusinessDescription from './Description/Description';
import MoreBusinessInfo from './MoreBusinessInfo/MoreBusinessInfo';

const detailedBusinessInfo = (props) => {

    return (
        <Aux>
            <div class="">
              <h2>Detailed information</h2>
            </div>
            <article id="info_wrapper">
              <div className="detailed_info">
                <BusinessDescription
                    business_name={ 'Clean Fits Clothing and Footwear' }
                    description={ 'Fashion, Clothing, Footwear, make up and accessories' }/>

                <MoreBusinessInfo
                    products_range={ 'All ladies clothing and Footwear' }
                    product_brands={ 'Marks & Spencer, Gucci, Armani' }
                    payment_methods={ 'Cash, Cheque, Mpesa, Credit Card' }/>
              </div>
            </article>
        </Aux>
    );
}


export default detailedBusinessInfo;
