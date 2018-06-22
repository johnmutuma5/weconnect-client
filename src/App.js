import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route } from 'react-router-dom';
import Businesses from './containers/Businesses/Businesses';



class App extends Component {
  render() {
    return (
        <Layout>
            <Route exact path="/businesses" component={ Businesses } />
        </Layout>
    );
  }
}

export default App;
