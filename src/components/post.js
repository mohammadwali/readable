import React, {Component} from 'react'
import {connect} from 'react-redux'
import Truncate from 'react-truncate'
import moment from 'moment'
import {Link} from 'react-router-dom'

import * as actions from '../actions/postActions';

import VoteWidget from './VoteWidget';


class Post extends Component {

    componentWillMount() {
        const {post, loadPostComments} = this.props;

        //we only need to get comments if they are not there already
        if (!post.comments) {
            loadPostComments(post.id);
        }
    }

    render() {
        const {post} = this.props;
        const formattedDate = moment(post.timestamp).format("MM-DD-YYYY");

        return (
            <div className="post">
                <div className="row">
                    {  console.log("Reloading post", post) }
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
                                    <a >{ post.comments && post.comments.length || '0'} Comments</a>

                                </div>
                                <div className="col-md-3 post-action-buttons">
                                    <a className="btn btn-xs btn-default">Edit</a>

                                    <a className="btn btn-xs btn-danger">Delete</a>
                                </div>

                                <div className="col-md-3">

                                    <VoteWidget score={post.voteScore}
                                                onChange={type => this.props.doScore(type, post.id)}/>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        loadPostComments: (postId) => dispatch(actions.loadPostComments(postId)),
        doScore: (type, postId) => dispatch(actions.updatePostVote(type, postId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)

