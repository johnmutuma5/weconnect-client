import React from 'react';
import PropTypes from 'prop-types';
import Business from '../../components/Business/Business';
import loadBusinesses from '../../store/resources/business';
import actions from '../../store/actions/actions';

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
        this.store.dispatch(actions.initBusinessesState());
    }

    componentDidMount() {
        // load businesses async
        loadBusinesses()
            .then(result => this.store.dispatch(actions.renderFetchedBusinesses(result)));
    }

    handleStateDidUpdate(state) {
        this.setState(state.businessesState);
    }

    componentWillUnmount() {
        for(let subscriptionRevoker of this.subscriptionsRevokers)
            subscriptionRevoker();
    }

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
