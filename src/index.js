import React from 'react';
import ReactDOM from 'react-dom';
import './styles.less';
import App from './App';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <Router history={history}>
        <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
