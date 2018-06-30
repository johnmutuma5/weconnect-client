import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Business from '../../components/Business/Business';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import CreateButton from '../../components/UI/CreateButton/CreateButton';
import Aux from '../../hoc/Aux';
import {loadBusinesses, registerNewBusiness} from '../../store/resources/business';
import {initBusinessesState, renderFetchedBusinesses} from '../../store/actions/actions';
import BusinessRegistrationForm from './BusinessRegistration/BusinessRegistrationForm';

import './Businesses.css';


class Businesses extends React.Component {
    constructor (props, context) {
        super(props);
        this.subscriptions = [
            'INIT_BUSINESSES_STATE',
            'RENDER_FETCHED_BUSINESSES'
        ];
        this.store = context.store
    }

    componentWillMount() {
        // subscribe to store events
        this.subscriptionsRevokers =
            this.store.subscribe(this.subscriptions,
                            this.handleStateDidUpdate.bind(this));
        // get initial state
        this.store.dispatch(initBusinessesState());
    }

    componentDidMount() {
        // load businesses async
        loadBusinesses()
            .then(result => {
                let businesses = result.businesses
                this.store.dispatch(renderFetchedBusinesses(businesses))
            });
    }

    handleStateDidUpdate(state) {
        this.setState(state.businessesState);
    }

    componentWillUnmount() {
        for(let subscriptionRevoker of this.subscriptionsRevokers)
            subscriptionRevoker();
    }

    addBusiness(businessData) {
        return registerNewBusiness(businessData)
    }

    toggleRegistering() {
        let registeringNew = this.state.registeringNew;
        this.setState({registeringNew: !registeringNew});
    }

    render() {
        const businesses = this.state.businesses
            .map((business) => {
                const business_props = {
                    name: business.name,
                    location: business.location,
                    category: business.category
                }
                const id = business.id;
                // instantiate a business with business_props
                return (
                    <Link to={ '/businesses/' + id } key={ id }>
                        <Business {...business_props } />
                    </Link>
                );
            });

        let loader = null;
        if (this.state.loading)
            loader = 'loading now. Please wait'

        // check layout state
        const layoutState = this.context.layoutState;

        let businessRegistrationElements = null;
        if (layoutState.showLayoutForAuthenticatedUser) {
            businessRegistrationElements =
                <Aux>
                     <CreateButton
                         active={ !this.state.registeringNew }
                         id={'animatedAtThumb'}
                         click={ this.toggleRegistering.bind(this) }/>,
                     <BusinessRegistrationForm
                         active={ this.state.registeringNew }
                         onSubmit={ this.addBusiness }/>
                     <Backdrop
                         active={ this.state.registeringNew }
                         click={ this.toggleRegistering.bind(this) }/>
                </Aux>
        }

        return (
            // render businesses and new business registration UI components
            <article className='Businesses'>
                { businesses }
                { businessRegistrationElements }
                { loader }
            </article>
        );
    }
};


Businesses.contextTypes = {
    store: PropTypes.object.isRequired,
    layoutState: PropTypes.object.isRequired
}

export default Businesses;
