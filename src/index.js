import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

//install react needed things like provider so forth.
// import App from './components/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import _ from 'lodash';

import Game from './components/game';

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
