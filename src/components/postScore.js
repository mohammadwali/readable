import React, {Component} from "react"

class PostScore extends Component {

    doScore(type) {
        this.props.onScore(type, this.props.post.id);
    }


    render() {

        return (
            <div className="post-score">
                <span onClick={() => this.doScore("upVote")} className="glyphicon glyphicon-arrow-up"/>
                <span> { this.props.post.voteScore }</span>
                <span onClick={() => this.doScore("downVote")} className="glyphicon glyphicon-arrow-down"/>
            </div>

        )
    }
}


export default PostScore;