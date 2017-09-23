import React, {Component} from 'react'
import {connect} from 'react-redux'
import Truncate from 'react-truncate'
import {Link} from 'react-router-dom'
import {SubmissionError} from 'redux-form';

import * as actions from '../actions/postActions';

import PostInfo from './PostInfo.component';
import PostEditForm from './PostEdit.component';


class PostItem extends Component {

    componentWillMount() {
        const {post, loadPostComments} = this.props;

        //we only need to get comments if they are not there already
        if (!post.comments && post.id) {
            loadPostComments(post.id);
        }
    }

    onPostEdit(values) {
        if (!values.title || values.title.trim() === "") {
            throw new SubmissionError({
                _error: "Post title is required"
            })
        }

        if (!values.body || values.body.trim() === "") {
            throw new SubmissionError({
                _error: "Post description cannot be empty."
            })
        }

        this.props.updatePost({id: this.props.post.id, ...values})
    }

    render() {
        const {post, cancelEdits} = this.props;
        const truncate = typeof this.props.truncate === "undefined" ? true : this.props.truncate;


        return (
            <div className="post">
                <div className="row">
                    {  console.log("Reloading post", post) }


                    {  post.isEditing ?
                        <PostEditForm
                            cancelEdit={() => cancelEdits(post.id)}
                            onSubmit={this.onPostEdit.bind(this)}
                            form={"post-edit-form-" + post.id}
                            post={post}/> :
                        <PostContent post={post} truncate={truncate}/>
                    }


                </div>
                <div className="row">

                    <div className="col-md-10  col-md-offset-1">
                        <div className={"row" + (post.isEditing ? " disabled" : "")}>
                            <PostInfo post={post}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function PostContent({post, truncate}) {
    return (
        <div className="col-md-10  col-md-offset-1">

            <h2 className="post-title">
                <Link to={ `${post.category}/${post.id}` }>{ post.title } </Link>
            </h2>
            <p className="post-description">

                { truncate ? <Truncate lines={4}
                                       ellipsis={
                                           <span>...</span>
                                       }>

                    { post.body  }
                </Truncate> : post.body }
            </p>

        </div>);
}


function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        loadPostComments: postId => dispatch(actions.loadPostComments(postId)),
        cancelEdits: postId => dispatch(actions.toggleEdit(postId, false)),
        updatePost: values => dispatch(actions.updatePost(values))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostItem)

