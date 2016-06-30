import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store.js';
// import reducers from './redux/reducers';
import scss from './sass/tank.scss'

// let store = createStore(reducers);

render( 
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
