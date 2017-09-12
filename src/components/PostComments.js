import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/postActions';

import CommentForm from './CommentForm'


const CommentItem = ({comment}) => {
    return ( <div className="comment-item">
        <div className="comment-header clearfix">
            <div className="col-md-2">
                <span className="glyphicon glyphicon-user"/>
                {comment.author}
            </div>
            <div className="col-md-3">
                <span className="glyphicon glyphicon-calendar"/>
                06-29-2016
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
                <a className="delete-icon inline-icons"><i className="fa fa-trash"/></a>


            </div>
        </div>
        <div className="comment-body clearfix">

            <div className="col-md-12"> {comment.body}</div>

        </div>


    </div>);
};


class PostPage extends Component {


    static  onCommentAdd(values) {
        console.log(values)
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
                            ) : ([

                                <h2 id="comments-head">
                                    <i className="fa fa-comments-o"/>
                                    {post.comments.length} comments on this post.
                                </h2>
                                ,

                                <div className="col-md-12">
                                    { post.comments.map(comment => <CommentItem comment={comment} key={comment.id}/>) }
                                </div>
                            ])
                        }


                    </div>
                </div>


                <div className="row">
                    <CommentForm onSubmit={this.onCommentAdd}/>
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
    return {}
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);

