import React, {Component} from 'react'
import {connect} from 'react-redux'
import Truncate from 'react-truncate'
import moment from 'moment'
import {Link} from 'react-router-dom'

import * as actions from '../actions/postActions';

import PostScore from './postScore';

class PostsList extends Component {

    componentWillMount() {
        this.props.loadPosts();
    }

    render() {


        return (
            <div id="posts">


                {
                    this.props.posts.map(post => {

                        const formattedDate = moment(post.timestamp).format("MM-DD-YYYY");


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

                                                    <span className="glyphicon glyphicon-user"/>
                                                    &nbsp;
                                                    { post.author }

                                                </div>
                                                <div className="col-md-3">
                                                    <span className="glyphicon glyphicon-calendar"/>
                                                    &nbsp; {formattedDate}
                                                </div>


                                                <div className="col-md-3">

                                                    <span className="glyphicon glyphicon-comment"/>
                                                    &nbsp;
                                                    <a >{post.comments || '0'} Comments</a>

                                                </div>
                                                <div className="col-md-3">

                                                    <PostScore post={post} onScore={this.props.doScore}/>


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
        loadPosts: () => dispatch(actions.loadPosts()),
        doScore: (type, postId) => dispatch(actions.updatePostVote(type, postId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList)