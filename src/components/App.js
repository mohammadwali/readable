import React, {Component} from 'react'
import {connect} from 'react-redux'

import Header from './Header';

class App extends Component {
    render() {

        return (
            <div>
                <Header/>
                
            </div>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)