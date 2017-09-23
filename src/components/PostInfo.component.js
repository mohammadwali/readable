import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import * as actions from '../actions/postActions';

import VoteWidget from './VoteWidget.component';


class PostInfo extends Component {

    render() {
        const {post, deletePost, onDelete, toggleEdit} = this.props;
        const formattedDate = moment(post.timestamp).format("MM-DD-YYYY");

        return (
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
                    <a >{ (post.comments && (post.comments.length + ( post.comments.length > 1 ? " Comments" : " Comment")) ) || "0 Comment"} </a>

                </div>
                <div className="col-md-3 post-action-buttons">
                    <a className="btn btn-xs btn-default"
                       onClick={() => toggleEdit(post.id, true)}
                    >Edit</a>

                    <a className="btn btn-xs btn-danger"
                       onClick={() => window.confirm("Do you want to delete this permanently?") && (() => {
                           deletePost(post.id);
                           onDelete && onDelete(post);
                       })()}
                    >Delete</a>
                </div>

                <div className="col-md-3">

                    <VoteWidget score={post.voteScore}
                                onChange={type => this.props.doScore(type, post.id)}/>

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
        doScore: (type, postId) => dispatch(actions.updatePostVote(type, postId)),
        deletePost: (postId) => dispatch(actions.deletePost(postId)),
        toggleEdit: (postId, state) => dispatch(actions.toggleEdit(postId, state))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostInfo)

