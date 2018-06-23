import React from 'react';
import Business from '../../components/Business/Business';
import loadBusinesses from '../../store/resources/business';
import { store } from '../../';
import actions from '../../store/actions';

import './Businesses.css';

class Businesses extends React.Component {

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
        this.subscriptionsRevokers = [];
        this.unsubscribe =
            store.after('GET_BUSINESSES', this.renderBusinesses.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribe();
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
