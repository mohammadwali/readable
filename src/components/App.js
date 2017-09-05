import React, {Component} from 'react'
import {connect} from 'react-redux'

import Header from './Header';
import PostsList from './PostsList';


class App extends Component {
    render() {

        return (
            <div>
                <Header/>

                <div className="container">
                    <div className="row">

                        <div className="col-md-8">
                            <PostsList/>
                        </div>


                    </div>
                </div>
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