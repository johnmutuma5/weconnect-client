import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Layout>
        <section>
            <Route exact path="/" render={ (props)=> <div>{ 'hello home' }</div> } />
            <Route path="/businesses" render={ (props)=> <div>{ 'Hello Businesses' }</div> } />
        </section>
      </Layout>
    );
  }
}

export default App;
