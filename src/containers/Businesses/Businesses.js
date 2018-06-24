import React from 'react';
import Business from '../../components/Business/Business';
import loadBusinesses from '../../store/resources/business';
import { store } from '../../';
import actions from '../../store/actions/actions';

import './Businesses.css';


class Businesses extends React.Component {
    constructor (props) {
        super(props);
        // every subscription to store events return a revoker for the subscription
        this.subscriptions = {
            GET_BUSINESSES: this.renderBusinesses,
            GET_INITIAL_BUSINESSES_STATE: this.handleInitialStateReady
        };
        this.subscriptionsRevokers = [];
    }

    componentWillMount() {
        // subscribe to store events
        const subscriptions = Object.entries(this.subscriptions);
        for(let [subscrp, handler] of subscriptions)
            this.subscribe(subscrp, handler.bind(this));

        store.dispatch(actions.getInitialBusinessesState());
        loadBusinesses()
            .then(result => store.dispatch(actions.getBusinesses(result)));
    }

    componentWillUnmount() {
        for(let subscriptionRevoker of this.subscriptionsRevokers)
            subscriptionRevoker();
    }

    // subscribes listeners to store events
    subscribe(event, callback) {
        const unsubscribe = store.after(event, callback);
        this.subscriptionsRevokers.push(unsubscribe);
    }

    // store listeners: these should be in this componenent's subscriptions
    handleInitialStateReady(state) {
        this.setState(state.businessesState);
    }

    renderBusinesses(state) {
        this.setState(state.businessesState);
    }
    // store listeners end

    render() {
        const businesses = this.state.businesses
            .map((business) => {
                const business_props = {
                    name: business.name,
                    location: business.location,
                    category: business.category
                }
                // instantiate a business with business_props
                return <Business {...business_props } key={ business.id } />
            });

        let loader = null;
        if (this.state.loading)
            loader = 'loading now. Please wait'

        return (
            <article className='Businesses'>
                { businesses }
                { loader }
            </article>
        );
    }
};

export default Businesses;
