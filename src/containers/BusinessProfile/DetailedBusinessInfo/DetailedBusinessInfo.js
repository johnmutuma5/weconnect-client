import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import BusinessDescription from './Description/Description';
import MoreBusinessInfo from './MoreBusinessInfo/MoreBusinessInfo';
import Button from '../../../components/UI/Button/Button';

import './DetailedBusinessInfo.css';

const detailedBusinessInfo = (props, context) => {
    const layoutState = context.layoutState;
    let editingElements = (
        <div className='EditBusiness'>
            <div>
                Edit Business Information
            </div>
            <Button
                type='dark'
                onClickHandler={ props.toggleEditing }> Edit </Button>
        </div>
    );

    editingElements = layoutState.showLayoutForAuthenticatedUser?
                        editingElements :
                        null;

    return (
        <Aux>
            <div class="">
              <h2>Detailed information</h2>
            </div>
            <article id="info_wrapper">
              <div className="detailed_info">
                <BusinessDescription
                    business_name={ props.name }
                    description={ 'Fashion, Clothing, Footwear, make up and accessories' }/>

                <MoreBusinessInfo
                    products_range={ 'All ladies clothing and Footwear' }
                    product_brands={ 'Marks & Spencer, Gucci, Armani' }
                    payment_methods={ 'Cash, Cheque, Mpesa, Credit Card' }/>

                { editingElements }
              </div>
            </article>
        </Aux>
    );
}

detailedBusinessInfo.contextTypes = {
    layoutState: PropTypes.object.isRequired
}

export default detailedBusinessInfo;
