import React from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter, Route, Redirect, Switch, Link} from 'react-router-dom'


import './index.css';

import reducer from './reducers'
import HomePage from './components/Home.component';
import PostPage from './components/PostDetails.component';

import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/post/:id" component={PostPage}/>
                <Redirect to="/home"/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();