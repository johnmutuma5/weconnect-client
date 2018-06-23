import React from 'react';
import Business from '../../components/Business/Business';
import loadBusinesses from '../../store/resources/business';

import './Businesses.css';

class Businesses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: []
        }
    }

    componentDidMount() {
        this.getBusinesses();
        console.log('done');
    }

    getBusinesses() {
        let businesses = [];
        const prom = loadBusinesses();
        prom.then((result) => {
            businesses = result;
            this.setState({businesses: businesses})
        })
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

        return (
            <article className='Businesses'>
                { businesses }
            </article>
        );
    }
};

export default Businesses;
