import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import ResourcesProvider, { createStore } from './store';
import weConnectReducer from './store/baseReducer';


import './index.css';

export const store = createStore(weConnectReducer);

const app = (
    <BrowserRouter>
        <ResourcesProvider store={ store }>
            <App />
        </ResourcesProvider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
