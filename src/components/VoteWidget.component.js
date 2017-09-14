import React, {Component} from "react"

class VoteWidget extends Component {

    render() {

        return (
            <div className="vote-widget">
                <span onClick={() => this.props.onChange("upVote")} className="glyphicon glyphicon-arrow-up"/>
                <span> { this.props.score }</span>
                <span onClick={() => this.props.onChange("downVote")} className="glyphicon glyphicon-arrow-down"/>
            </div>

        )
    }
}


export default VoteWidget;