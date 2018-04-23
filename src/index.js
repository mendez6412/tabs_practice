import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tabsApp from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};
const store = createStore(
    tabsApp,
    initialState
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
