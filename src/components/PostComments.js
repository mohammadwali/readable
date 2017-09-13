import React, {Component} from 'react';
import {connect} from 'react-redux';
import TimeAgo from 'react-timeago';
import {SubmissionError} from 'redux-form';
import * as EmailValidator from 'email-validator';
import moment from 'moment';
import * as actions from '../actions/postActions';

import CommentForm from './CommentForm'


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
                                            deleteComment={this.props.deleteComment} key={comment.id}
                                            comment={comment}/>) }
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

const CommentItem = ({comment, deleteComment}) => {

    const formattedDate = moment(comment.timestamp).format("YYYY-MM-DD hh:mm:ss");

    return ( <div className="comment-item">
        <div className="comment-header clearfix">
            <div className="col-md-8">
                <span className="glyphicon glyphicon-user"/>
                &nbsp;
                <strong>{comment.author}</strong> commented <TimeAgo date={comment.timestamp}/> ( { formattedDate } )
            </div>

            <div className="col-md-2 pull-right">

                <div className="post-score">
                    <span className="glyphicon glyphicon-arrow-up"/>
                    <span> {comment.voteScore}</span>
                    <span className="glyphicon glyphicon-arrow-down"/>
                </div>

            </div>

            <div className="col-md-1 text-right pull-right inline-icons-wrap">

                <a className="edit-icon inline-icons"><i className="fa fa-pencil"/></a>
                <a className="delete-icon inline-icons"
                   onClick={() => deleteComment(comment.id, comment.parentId)}>
                    <i className="fa fa-trash"/>
                </a>


            </div>
        </div>
        <div className="comment-body clearfix">

            <div className="col-md-12"> {comment.body}</div>

        </div>


    </div>);
};


function mapStateToProps(store, ownProps) {
    return {
        post: store.postDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (data, postId) => dispatch(actions.addNewComment(data, postId)),
        deleteComment: (commentId, postId) => dispatch(actions.deleteComment(commentId, postId))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);

