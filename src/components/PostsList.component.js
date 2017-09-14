import React, {Component} from 'react'
import {connect} from 'react-redux'


import * as actions from '../actions/postActions';
import PostItem from './PostItem.component';

class PostsList extends Component {

    componentWillMount() {
        this.props.loadPosts();
    }

    render() {
        return ( <div id="posts"> { this.props.posts.map(post => <PostItem key={post.id} post={post}/>) } </div>)
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPosts: () => dispatch(actions.loadPosts()),
        doScore: (type, postId) => dispatch(actions.updatePostVote(type, postId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList)