import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Route } from 'react-router-dom';
import Businesses from './containers/Businesses/Businesses';
import UserRegistrationForm from './containers/Auth/UserRegistration/UserRegistrationForm';



class App extends Component {
  render() {
    return (
        <Layout>
            <Route path="/businesses" component={ Businesses } />
            <Route exact path="/register" component={ UserRegistrationForm } />
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
