import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Business from '../../components/Business/Business';
import SideElements from '../../hoc/SideElements/SideElements';
import FilterTools from '../BusinessesFilter/FilterTools/FilterTools';
import { weConnectFilterBusinesses } from '../../store/resources/business';



class BusinessesFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterResults: []
        }
    }

    componentWillMount() {
        const queryString = this.props.location.search;
        this.loadResults(queryString);

    }

    componentWillReceiveProps(nextProps) {
        const queryString = nextProps.location.search;
        this.loadResults(queryString);
    }

    loadResults(queryString) {
        weConnectFilterBusinesses(queryString)
            .then(res => (
                this.setState({filterResults: res['results']})
            ));
    }


    render() {
        const results = this.state.filterResults.map(business => (
            <Link to={ `/businesses/${business.id}` } key={business.id}>
                <Business
                    name={business.name}
                    location={business.location}
                    category={business.category}/>
            </Link>
        ));

        return (
            <section>
                <SideElements>
                    <FilterTools loadsActive />
                </SideElements>
                <article className='Businesses'>
                    { results }
                </article>
            </section>
        );
    }

}

export default withRouter(BusinessesFilter);
