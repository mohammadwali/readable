import React, {Component} from 'react'
import {connect} from 'react-redux'


import * as actions from '../actions/postActions';
import PostItem from './PostItem.component';

class PostsList extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.category !== this.props.category) {
            this.props.loadPosts(newProps.category);
        }
    }


    componentWillMount() {
        this.props.loadPosts(this.props.category);
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
        loadPosts: category => dispatch(actions.loadPosts(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList)