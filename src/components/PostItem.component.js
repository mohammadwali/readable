import React, {Component} from 'react'
import {connect} from 'react-redux'
import Truncate from 'react-truncate'
import {Link} from 'react-router-dom'

import * as actions from '../actions/postActions';

import PostInfo from './PostInfo.component';


class PostItem extends Component {

    componentWillMount() {
        const {post, loadPostComments} = this.props;

        //we only need to get comments if they are not there already
        if (!post.comments) {
            loadPostComments(post.id);
        }
    }

    render() {
        const {post} = this.props;

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
                            <PostInfo post={post}/>
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
)(PostItem)
