import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';
import moment from 'moment';
import * as actions from '../../actions/postActions';

import Header from '../Header';
import PostScore from '../postScore'


class PostPage extends Component {

    componentWillMount() {
        this.props.getPost(this.props.match.params.id);
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

                                        <PostScore post={post} onScore={doScore}/>


                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div id="comments">
                                    <h3> There are no comments yet.</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div id="comment-form">
                                    <h2>Add a comment</h2>
                                    <form className="comment-form clearfix">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="E-mail"/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="form-control" rows={6} placeholder="Your Comment..."
                                                      defaultValue={""}/>
                                            <a className="btn btn-primary">Add comment</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
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

