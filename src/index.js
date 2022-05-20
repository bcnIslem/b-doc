
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import './i18next'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import { reducers } from './reducers'

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={(<div></div>)}>
            <App />
        </Suspense>
    </Provider>,
    document.getElementById('root')
);