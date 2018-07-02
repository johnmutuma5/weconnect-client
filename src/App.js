import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Route } from 'react-router-dom';
import Businesses from './containers/Businesses/Businesses';
import UserRegistrationForm from './containers/Auth/UserRegistration/UserRegistrationForm';
import BusinessProfile from './containers/BusinessProfile/BusinessProfile';



class App extends Component {
  render() {
    return (
        <Layout>
            <Route exact path="/businesses" component={ Businesses } />
            <Route exact path="/businesses/:id" component={ BusinessProfile } />
            <Route exact path="/" render={ () => {
                    return (
                        <Businesses />
                    );
                    }
                }
            />
        </Layout>
    );
  }
}

export default App;
