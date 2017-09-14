import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import * as actions from '../actions/postActions';

import VoteWidget from './VoteWidget';


class PostInfo extends Component {

    render() {
        const {post} = this.props;
        const formattedDate = moment(post.timestamp).format("MM-DD-YYYY");

        return (
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
                    <a >{ (post.comments && (post.comments.length + ( post.comments.length > 1 ? " Comments" : " Comment")) ) || "0 Comment"} </a>

                </div>
                <div className="col-md-3 post-action-buttons">
                    <a className="btn btn-xs btn-default">Edit</a>

                    <a className="btn btn-xs btn-danger">Delete</a>
                </div>

                <div className="col-md-3">

                    <VoteWidget score={post.voteScore}
                                onChange={type => this.props.doScore(type, post.id)}/>

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
        doScore: (type, postId) => dispatch(actions.updatePostVote(type, postId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostInfo)

