import React, {Component} from 'react'
import {connect} from 'react-redux'


class PostsList extends Component {
    render() {

        return (
            <div id="posts">

                <div className="post">
                    <div className="row">

                        <div className="col-md-10  col-md-offset-1">
                            <h2 className="post-title"> Post with video </h2>
                            <p className="post-description">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the
                                Semantics, a large language ocean.
                            </p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-10  col-md-offset-1">
                            <div className="row">
                                <div className="post-info row text-center">


                                    <div className="col-md-3">
                                        <span className="glyphicon glyphicon-calendar"/>
                                        &nbsp; 6. May, 2014
                                    </div>
                                    <div className="col-md-3">

                                        <span className="glyphicon glyphicon-comment"/>
                                        &nbsp;
                                        <a >0 Comments</a>

                                    </div>

                                    <div className="col-md-3">

                                        <span className="glyphicon glyphicon-tag"/>
                                        &nbsp;
                                        <a >Technology</a>

                                    </div>
                                    <div className="col-md-3 text-right">

                                        <div className="post-reaction">
                                            <span className="glyphicon glyphicon-star"/>
                                            <a >0 </a>
                                        </div>

                                        <div className="post-reaction">
                                            <span className="glyphicon glyphicon-thumbs-up"/>
                                            <a >0 </a>
                                        </div>

                                        <div className="post-reaction">
                                            <span className="glyphicon glyphicon-thumbs-down"/>
                                            <a >10 </a>
                                        </div>

                                    </div>


                                </div>
                            </div>
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
)(PostsList)