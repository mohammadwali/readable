import React, {Component} from 'react'
import {connect} from 'react-redux'
import Truncate from 'react-truncate'

import {Link} from 'react-router-dom'

import * as actions from '../actions/postActions';

class PostsList extends Component {

    componentWillMount() {
        this.props.loadPosts();
    }

    render() {


        return (
            <div id="posts">


                {
                    this.props.posts.map(post => {


                        return (

                            <div className="post" key={post.id}>
                                <div className="row">

                                    <div className="col-md-10  col-md-offset-1">
                                        <h2 className="post-title">
                                            <Link to={ "/post/" + post.id }>{ post.title } </Link>
                                        </h2>
                                        <p className="post-description">

                                            <Truncate lines={4}
                                                      ellipsis={
                                                          <span>...</span>
                                                      }>

                                                { post.body  }
                                            </Truncate>
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


                        )


                    })


                }


            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPosts: () => dispatch(actions.loadPosts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList)