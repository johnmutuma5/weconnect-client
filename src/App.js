import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Businesses from './containers/Businesses/Businesses';
import BusinessesFilter from './containers/BusinessesFilter/BusinessesFilter';
import UserRegistrationForm from './containers/Auth/UserRegistration/UserRegistrationForm';
import BusinessProfile from './containers/BusinessProfile/BusinessProfile';



class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={ Businesses } />
                <Route exact path="/businesses" component={ Businesses } />
                <Route exact path="/businesses/filter" component={ BusinessesFilter } />
                <Route exact path="/businesses/search" component={ BusinessesFilter } />
                <Route exact path="/businesses/:id" component={ BusinessProfile } />
            </Switch>
        </Layout>
    );
  }
}

export default App;
