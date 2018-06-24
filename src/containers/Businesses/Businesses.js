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
        this.subscriptionsRevokers = [];
    }

    componentWillMount() {
        this.setState({
            businesses: [],
            loading: true
        });

        loadBusinesses()
            .then((result) => {
                const action = actions.getBusinesses(result);
                store.dispatch(action);
            })
        // subscribe to store events
        this.subscriptionsRevokers
            .push(store.after('GET_BUSINESSES',
                             this.renderBusinesses.bind(this)));
    }

    componentWillUnmount() {
        for(let subscriptionRevoker of this.subscriptionsRevokers)
            subscriptionRevoker();
    }

    renderBusinesses(state) {
        this.setState({
            businesses: state.businesses,
            loading: false
        });
    }

    render() {
        const businesses = this.state.businesses
            .map((business) => {
                const business_props = {
                    name: business.name,
                    location: business.location,
                    category: business.category
                }
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
