import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Layout>
            <Route exact path="/" render={ (props)=> <div>{ 'hello home' }</div> } />
            <Route path="/businesses" render={ (props)=> <div>{ 'Hello Businesses' }</div> } />
      </Layout>
    );
  }
}

export default App;
