import React, {Component} from 'react';
import TimeAgo from 'react-timeago';
import moment from 'moment';

import VoteWidget from './VoteWidget'
import CommentEditForm from './CommentEdit'


class CommentItem extends Component {
    render() {
        const {comment, deleteComment, onScoreChange, toggleEdit, updateComment} = this.props;
        const formattedDate = moment(comment.timestamp).format("YYYY-MM-DD hh:mm:ss");

        return ( <div className="comment-item">
            <div className={ "comment-header clearfix" + (comment.isEditing ? " disabled" : "")  }>
                <div className="col-md-8">
                    <span className="glyphicon glyphicon-user"/>
                    &nbsp;
                    <strong>{comment.author}</strong> commented <TimeAgo date={comment.timestamp}/> ( { formattedDate }
                    )
                </div>

                <div className="col-md-2 pull-right">

                    <VoteWidget score={comment.voteScore} onChange={type => onScoreChange(type, comment.id)}/>

                </div>

                <div className="col-md-1 text-right pull-right inline-icons-wrap">

                    <a className="edit-icon inline-icons"
                       onClick={() => toggleEdit(comment.id, true)}><i className="fa fa-pencil"/></a>
                    <a className="delete-icon inline-icons"
                       onClick={() => deleteComment(comment.id, comment.parentId)}>
                        <i className="fa fa-trash"/>
                    </a>


                </div>
            </div>
            <div className="comment-body clearfix">

                {

                    (comment.isEditing ?
                        <CommentEditForm comment={comment.body}
                                         commentId={comment.id}
                                         form={"comment-item-" + comment.id}
                                         onSubmit={updateComment}
                                         cancelEdit={() => toggleEdit(comment.id, false)}
                        /> : <div className="col-md-12"> {comment.body} </div>)


                }

            </div>


        </div>);
    }
}

export default CommentItem;