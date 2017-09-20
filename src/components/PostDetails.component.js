import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/postActions';

import Header from './Header.component';
import PostComments from './PostComments.component'
import PostInfo from './PostInfo.component';


class PostDetails extends Component {

    componentWillMount() {
        this.props.getPost(this.props.match.params.post_id);
    }

    render() {
        const {post} = this.props;

        return (
            <div>
                <Header/>

                <div className="container bg-container post-page-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="row">
                                <h1 className="post-title"> { post.title } </h1>
                                <p className="post-content">
                                    { post.body  }
                                </p>
                            </div>
                            <div className="row">
                                <PostInfo post={post}/>
                            </div>
                            <PostComments/>
                        </div>
                    </div>
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
        getPost: postId => dispatch(actions.loadPostById(postId))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetails);

