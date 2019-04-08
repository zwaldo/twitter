import React from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import './styles/index.css';
import router from './router';

import * as serviceWorker from './serviceWorker';

render(
        <Router
            history={browserHistory}
            routes={router}
        />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
