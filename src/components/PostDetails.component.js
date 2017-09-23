import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/postActions';

import Header from './Header.component';
import PostComments from './PostComments.component'
import PostItem from './PostItem.component';

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
                        <PostItem post={post} truncate={false}/>
                        <div className="col-md-8 col-md-offset-2">
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

