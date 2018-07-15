import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import DetailedBusinessInfo from './DetailedBusinessInfo/DetailedBusinessInfo';
import EditBusinessForm from './EditBusinessForm/EditBusinessForm';
import DeleteBusinessForm from './DeleteBusinessForm/DeleteBusinessForm';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import PrimaryBusinessInfo from './PrimaryBusinessInfo/PrimaryBusinessInfo';
import SocialMedia from './SocialMedia/SocialMedia';
import Reviews from './Reviews/Reviews';
import { weConnectFetchPrimaryBusinessInfo,
         weConnectFetchBusinessReviews,
         weConnectAddBusinessReview,
         weConnectUpdateBusiness,
         weConnectDeleteBusiness } from '../../store/resources/business';
import { toggleGettingStarted } from '../../store/actions/actions';

import './BusinessProfile.css';

class BusinessProfile extends React.Component {
    constructor(props,context) {
        super(props);
        this.store = context.store
        this.state = {
            primaryBusinessInfo: {
                owner: {
                    name: '',
                    id: ''
                },
                category: '',
                location: '',
                mobile: '',
                specialization: '',
                registrationDate: 'Tue, February 27 2018',
            },
            reviews: [],
            editingProfile: false,
            deletingBusiness: false,
            readyToAddReview: false
        }
        this.subscriptions = [
            'LOGIN_USER',
            'LOGOUT_USER'
        ]
    }

    componentWillMount() {
        this.subscriptionsRevokers = this.store.subscribe(this.subscriptions,
                                        this.handleStateDidUpdate.bind(this));

        window.scrollTo (0, 0);
        const businessId = this.props.match.params['id'];
        weConnectFetchPrimaryBusinessInfo(businessId)
            .then(res => this.setState(setPrimaryBusinessInfo(res)));
        weConnectFetchBusinessReviews(businessId)
            .then(res => this.setState(setBusinessReviews(res)));
    }

    componentWillUnmount() {
        for(let subscriptionRevoker of this.subscriptionsRevokers)
            subscriptionRevoker();
    }

    handleStateDidUpdate(state) {
        this.setState({...this.state});
    }


    render() {

        const currentUserId = this.store.state.authState.userId || '';

        return (
            <Aux>
                <div className="jumbotron">
                    <PrimaryBusinessInfo { ...this.state.primaryBusinessInfo }/>
                    <SocialMedia />

                </div>

                <div className='BusinessProfileContent'>
                    <section>
                        <DetailedBusinessInfo
                            currentUserId={ currentUserId }
                            { ...this.state.primaryBusinessInfo }
                            toggleEditing={ this.toggleEditingProfile.bind(this) }
                            toggleDeleting={ this.toggleDeletingBusiness.bind(this) } />
                        <Reviews
                            currentUserId={ currentUserId }
                            businessOwnerId={ this.state.primaryBusinessInfo.owner.id }
                            reviews={ this.state.reviews }
                            readyToAddReview={ this.state.readyToAddReview }
                            toggleReadyToAddReview={this.toggleReadyToAddReview.bind(this)}
                            handleAddReview={ this.handleAddReview.bind(this) }
                            updateReviews={ this.refreshReviews } />

                        <EditBusinessForm
                            currentData={ this.state.primaryBusinessInfo }
                            visible={ this.state.editingProfile }
                            onSubmit={ this.handleUpdateBusiness.bind(this) }
                            refreshBusinessInfo={this.refreshBusinessInfo}/>
                        <Backdrop
                            active={ this.state.editingProfile }
                            click={ this.toggleEditingProfile.bind(this) }/>
                        <DeleteBusinessForm
                            visible={ this.state.deletingBusiness }
                            onSubmit={ this.handleDeleteBusiness.bind(this) }/>
                        <Backdrop
                            active={ this.state.deletingBusiness }
                            click={ this.toggleDeletingBusiness.bind(this) }/>
                    </section>
                </div>
            </Aux>
        );
    }

    toggleReadyToAddReview() {
        if (!this.store.state.layoutState.showLayoutForAuthenticatedUser && !this.state.readyToAddReview){
            const action = toggleGettingStarted();
            this.store.dispatch(action);
            return
        }
        this.setState({readyToAddReview: !this.state.readyToAddReview})
    }

    handleAddReview(reviewData) {
        // post to API
        const businessId = this.props.match.params['id'];
        const accessToken = this.store.state.authState.accessToken;
        return weConnectAddBusinessReview(businessId, reviewData, accessToken);
    }

    refreshReviews = () => {
        // fetch from API
        const businessId = this.props.match.params['id'];
        weConnectFetchBusinessReviews(businessId)
            .then(result => {
                let reviews = result['info']
                this.setState({reviews: reviews})
            })
    }

    handleUpdateBusiness = (data) => {
        const businessId = this.props.match.params['id'];
        const accessToken = this.store.state.authState.accessToken;
        return weConnectUpdateBusiness(businessId, data, accessToken);
    }

    refreshBusinessInfo = () => {
        const businessId = this.props.match.params['id'];
        weConnectFetchPrimaryBusinessInfo(businessId)
            .then(res => this.setState(setPrimaryBusinessInfo(res)))
            .then(() => setTimeout(() => this.toggleEditingProfile(), 1000));
    }

    toggleEditingProfile() {
        this.setState({editingProfile: !this.state.editingProfile})
    }

    handleDeleteBusiness() {
        const businessId = this.props.match.params['id'];
        const accessToken = this.store.state.authState.accessToken;
        return weConnectDeleteBusiness(businessId, accessToken);
    }

    toggleDeletingBusiness() {
        this.setState({deletingBusiness: !this.state.deletingBusiness})
    }
}

BusinessProfile.contextTypes = {
    store: PropTypes.object.isRequired
}



const setPrimaryBusinessInfo = res => (
    // return a funciont for functional setState
    (prevState, prevProps) => {
        const primaryBusinessInfo = {
            ...prevState.primaryBusinessInfo,
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
