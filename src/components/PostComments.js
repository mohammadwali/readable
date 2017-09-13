import React, {Component} from 'react';
import {connect} from 'react-redux';

import {SubmissionError} from 'redux-form';
import * as EmailValidator from 'email-validator';
import * as actions from '../actions/postActions';

import CommentForm from './CommentForm'
import CommentItem from './CommentItem'


class PostPage extends Component {


    onCommentAdd(values) {
        //todo validate here

        if (!values.name || values.name.trim() === "") {
            throw new SubmissionError({
                _error: "Name is required"
            })
        }

        if (!values.email || values.email.trim() === "") {
            throw new SubmissionError({
                _error: "Email is required"
            })
        }

        if (!EmailValidator.validate(values.email)) {
            throw new SubmissionError({
                _error: "Email looks invalid"
            })
        }

        if (!values.comment || values.comment.trim() === "") {
            throw new SubmissionError({
                _error: "Comment message cannot be empty"
            })
        }


        this.props.addComment(values, this.props.post.id);
    }

    onUpdateComment(values) {
        if (!values.comment || values.comment.trim() === "") {
            throw new SubmissionError({
                _error: "Comment message cannot be empty"
            })
        }


        this.props.updateComment(values, this.props.post.id);
    }

    render() {

        const {post} = this.props;

        return (
            <div>

                <div className="row">
                    <div id="comments" className="row">

                        {
                            !post.comments || !post.comments.length ? (
                                <h3> There are no comments yet.</h3>
                            ) : (
                                <div>
                                    <h2 className="comments-head">
                                        <i className="fa fa-comments-o"/>
                                        {post.comments.length} comments on this post.
                                    </h2>


                                    <div className="col-md-12">
                                        { post.comments.map(comment => <CommentItem
                                            comment={comment}
                                            key={comment.id}
                                            onScoreChange={(type, commentId) => this.props.onScoreChange(type, commentId, comment.parentId)}
                                            deleteComment={this.props.deleteComment}
                                            toggleEdit={this.props.toggleEdit}
                                            updateComment={this.onUpdateComment.bind(this)}/>) }
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>


                <div className="row">
                    <CommentForm onSubmit={this.onCommentAdd.bind(this)}/>
                </div>
            </div>
        )
    }
}


function mapStateToProps(store, ownProps) {
    return {
        post: store.postDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (data, postId) => dispatch(actions.addNewComment(data, postId)),
        updateComment: (data, postId) => dispatch(actions.updateComment(data, postId)),
        deleteComment: (commentId, postId) => dispatch(actions.deleteComment(commentId, postId)),
        onScoreChange: (type, commentId, postId) => dispatch(actions.updateCommentVote(type, commentId, postId)),
        toggleEdit: (commentId, state) => dispatch(actions.toggleCommentEdit(commentId, state))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);

