import React from 'react';
import Business from '../../components/Business/Business';

import './Businesses.css';

class Businesses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [
                {
                    id: '1000',
                    name: 'Andela Kenya',
                    location: 'TRM, Drive',
                    category: 'Software'
                },
                {
                    id: '1001',
                    name: 'Sleek',
                    location: 'Ridgeways, Kiambu Rd',
                    category: 'Fashion'
                },
                {
                    id: '1002',
                    name: 'Wenyeji Boys Ni Sisi',
                    location: 'Ridgeways, Kiambu Rd',
                    category: 'Software'
                },
                {
                    id: '1003',
                    name: 'Captured Memories',
                    location: 'TRM, Drive',
                    category: 'Photography'
                },
                {
                    id: '1004',
                    name: 'Standard Media',
                    location: 'TRM, Drive',
                    category: 'Media'
                },
                {
                    id: '1005',
                    name: 'Gold Diggers',
                    location: 'TRM, Drive',
                    category: 'Jewelry'
                }
            ]
        }
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
