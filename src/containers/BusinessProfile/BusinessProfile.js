import React from 'react';
import Aux from '../../hoc/Aux';
import DetailedBusinessInfo from './DetailedBusinessInfo/DetailedBusinessInfo';
import PrimaryBusinessInfo from './PrimaryBusinessInfo/PrimaryBusinessInfo';
import SocialMedia from './SocialMedia/SocialMedia';
import Reviews from './Reviews/Reviews';

import './BusinessProfile.css';

class BusinessProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryBusinessInfo: {
                businessName: 'Clean Fits Clothing and Footwear',
                ownerName: 'John Mutuma',
                category: 'Fashion',
                businessLocation: 'TRM, Drive',
                specialization: 'Clothing & Footwear',
                registrationDate: 'Tue, February 27 2018',
            },
            reviews: [],
        }
    }
    render() {
        return (
            <Aux>
                <div className="jumbotron">
                    <PrimaryBusinessInfo { ...this.state.primaryBusinessInfo }/>
                    <SocialMedia />

                </div>

                <div className='BusinessProfileContent'>
                    <section>
                        <DetailedBusinessInfo />
                        <Reviews reviews={ this.state.reviews } />
                    </section>
                </div>
            </Aux>
        );
    }
}


export default BusinessProfile;
