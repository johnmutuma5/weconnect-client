import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import DetailedBusinessInfo from './DetailedBusinessInfo/DetailedBusinessInfo';
import PrimaryBusinessInfo from './PrimaryBusinessInfo/PrimaryBusinessInfo';
import SocialMedia from './SocialMedia/SocialMedia';
import Reviews from './Reviews/Reviews';
import { weConnectFetchPrimaryBusinessInfo,
         weConnectFetchBusinessReviews,
         weConnectAddBusinessReview } from '../../store/resources/business';

import './BusinessProfile.css';

class BusinessProfile extends React.Component {
    constructor(props,context) {
        super(props);
        this.state = {
            primaryBusinessInfo: {
                name: '',
                category: '',
                location: '',
                mobile: '',
                specialization: '',
                registrationDate: 'Tue, February 27 2018',
            },
            reviews: [],
        }
        this.store = context.store
    }

    componentWillMount() {
        window.scrollTo (0, 0);
        const businessId = this.props.match.params['id'];
        weConnectFetchPrimaryBusinessInfo(businessId)
            .then(res => this.setState(setPrimaryBusinessInfo(res)));
        weConnectFetchBusinessReviews(businessId)
            .then(res => this.setState(setBusinessReviews(res)));
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
                        <DetailedBusinessInfo { ...this.state.primaryBusinessInfo } />
                        <Reviews
                            handleAddReview={ this.handleAddReview.bind(this) }
                            updateReviews={ this.updateReviews }
                            reviews={ this.state.reviews } />
                    </section>
                </div>
            </Aux>
        );
    }

    handleAddReview(reviewData) {
        // post to API
        const businessId = this.props.match.params['id'];
        const userToken = this.store.state.authState.userToken;
        return weConnectAddBusinessReview(businessId, reviewData, userToken);
    }

    updateReviews = () => {
        // fetch from API
        const businessId = this.props.match.params['id'];
        weConnectFetchBusinessReviews(businessId)
            .then(result => {
                let reviews = result['info']
                console.log(reviews)
                this.setState({reviews: reviews})
            })
    }

    componentWillUnmount () {
        console.log('Unmounted profile')
    }
}

BusinessProfile.contextTypes = {
    store: PropTypes.object.isRequired
}



const setPrimaryBusinessInfo = res => (
    // return a funciont for functional setState
    (prevState, prevProps) => {
        const primaryBusinessInfo = {
            ...prevState.reviews,
            ...res['info']
        }
        return {primaryBusinessInfo: primaryBusinessInfo};
    }
);

const setBusinessReviews = res => (
    // return a funciont for functional setState
    (prevState, prevProps) => {
        const reviews = res['info'];
        return {reviews: reviews};
    }
);

export default withRouter(BusinessProfile);
