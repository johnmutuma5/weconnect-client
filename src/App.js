import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Businesses from './containers/Businesses/Businesses';
import BusinessesFilter from './containers/BusinessesFilter/BusinessesFilter';
import SearchBusinesses from './containers/Search/Search';
import BusinessProfile from './containers/BusinessProfile/BusinessProfile';
import ResourcesProvider, { createStore } from './store';
import weConnectReducer from './store/baseReducer';


export const store = createStore(weConnectReducer);

class App extends Component {
  render() {
    return (
        <ResourcesProvider store={ store }>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Businesses } />
                    <Route exact path="/businesses" component={ Businesses } />
                    <Route exact path="/businesses/filter" component={ BusinessesFilter } />
                    <Route exact path="/businesses/search" component={ SearchBusinesses } />
                    <Route exact path="/businesses/:id" component={ BusinessProfile } />
                </Switch>
            </Layout>
        </ResourcesProvider>
    );
  }
}

export default App;
