import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Business from '../../components/Business/Business';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import {loadBusinesses, registerNewBusiness} from '../../store/resources/business';
import actions from '../../store/actions/actions';
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
        this.store.dispatch(actions.initBusinessesState());
    }

    componentDidMount() {
        // load businesses async
        loadBusinesses()
            .then(result => {
                let businesses = result.businesses
                this.store.dispatch(actions.renderFetchedBusinesses(businesses))
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

    render() {
        const businesses = this.state.businesses
            .map((business) => {
                const business_props = {
                    name: business.name,
                    location: business.location,
                    category: business.category
                }
                // instantiate a business with business_props
                return (
                    <Link to='/profile' key={ business.id }>
                        <Business {...business_props } />
                    </Link>
                );
            });

        let loader = null;
        if (this.state.loading)
            loader = 'loading now. Please wait'

        return (
            <article className='Businesses'>
                <BusinessRegistrationForm
                    active={ this.state.registeringNew }
                    onSubmit={ this.addBusiness.bind(this) }/>
                <Backdrop
                    active={this.state.registeringNew}
                    click={() => this.setState({registeringNew: false})}/>
                <div style={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                    background: '#8C8014',
                    position: 'fixed',
                    top: 100,
                    left: '60%'
                }}  onClick={() => this.setState({registeringNew: true})}  />
                { businesses }
                { loader }
            </article>
        );
    }
};


Businesses.contextTypes = {
    store: PropTypes.object.isRequired
}

export default Businesses;
