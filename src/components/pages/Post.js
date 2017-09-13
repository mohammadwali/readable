import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';
import moment from 'moment';
import * as actions from '../../actions/postActions';

import Header from '../Header';
import VoteWidget from '../VoteWidget'
import PostComments from '../PostComments'


class PostPage extends Component {

    componentWillMount() {
        this.props.getPost(this.props.match.params.id);
    }

    onCommentAdd(values) {
        console.log(values)
    }

    render() {
        const {post, doScore} = this.props;
        const formattedDate = moment(post.timestamp).format("MM-DD-YYYY");

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
                                <div className="post-info row text-center">

                                    <div className="col-md-3">

                                        <span className="glyphicon glyphicon-user"/>
                                        &nbsp;
                                        { post.author }

                                    </div>
                                    <div className="col-md-3">
                                        <span className="glyphicon glyphicon-calendar"/>
                                        &nbsp; {formattedDate}
                                    </div>


                                    <div className="col-md-3">

                                        <span className="glyphicon glyphicon-comment"/>
                                        &nbsp;
                                        <a >{ post.comments && post.comments.length || '0'} Comments</a>

                                    </div>
                                    <div className="col-md-3">

                                        <VoteWidget score={post.voteScore} onChange={type => doScore(type, post.id)}/>


                                    </div>

                                </div>
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
        getPost: postId => dispatch(actions.loadPostById(postId)),
        doScore: (type, postId) => dispatch(actions.updatePostVote(type, postId))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);

