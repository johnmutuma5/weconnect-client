import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route } from 'react-router-dom';
import Businesses from './containers/Businesses/Businesses';
import UserRegistrationForm from './containers/Auth/UserRegistration/UserRegistrationForm';



class App extends Component {
  render() {
    return (
        <Layout>
            <Route exact path="/" render={ () => {
                    return (
                        <Businesses />
                    );
                    }
                }
            />
            <Route exact path="/businesses" component={ Businesses } />
            <Route exact path="/register" component={ UserRegistrationForm } />
        </Layout>
    );
  }
}

export default App;
