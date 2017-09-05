import React from 'react'
import {Route, Redirect, Switch, Link} from 'react-router-dom';


import HomePage from './pages/Home';


const App = () => (
    <Switch>
        <Route exact path="/home" component={HomePage}/>

        <Route exact path="/hello" render={() => {
            return ( <div>
                hello
                <Link to="/home">Home</Link>
            </div>)
        }}/>

        <Redirect to="/home"/>
    </Switch>
);

export default App;