import React from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {Router, Route, Redirect, Switch} from 'react-router-dom'
import history from './utils/history'

import './index.css';

import reducer from './reducers'
import HomePage from './components/Home.component';
import PostPage from './components/PostDetails.component';
import PostAdd from './components/PostAdd.component';

import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/post/add" component={PostAdd}/>
                <Route exact path="/:category" component={HomePage}/>
                <Route exact path="/:category/:post_id" component={PostPage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();