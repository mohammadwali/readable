import React, {Component} from 'react';
import TimeAgo from 'react-timeago';
import moment from 'moment';


class CommentItem extends Component {
    render() {
        const {comment, deleteComment} = this.props;
        const formattedDate = moment(comment.timestamp).format("YYYY-MM-DD hh:mm:ss");

        return ( <div className="comment-item">
            <div className="comment-header clearfix">
                <div className="col-md-8">
                    <span className="glyphicon glyphicon-user"/>
                    &nbsp;
                    <strong>{comment.author}</strong> commented <TimeAgo date={comment.timestamp}/> ( { formattedDate }
                    )
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
    }
}


export default CommentItem;