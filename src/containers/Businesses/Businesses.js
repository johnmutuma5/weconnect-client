import React from 'react';

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
                }
            ]
        }
    }

    render() {
        const businesses = this.state.businesses.map((business) => (
                <div key={ business.id }>
                    name: { business.name }
                    <br />
                    location: { business.location }
                    <br />
                    catergory: { business.category }
                </div>
        ));

        return (
            <div>
                { businesses }
            </div>
        );
    }
};

export default Businesses;
