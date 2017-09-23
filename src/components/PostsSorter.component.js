import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/postActions';

class PostsSorter extends Component {
    componentWillMount() {

    }

    render() {


        return (
            <div className="bg-container">
                <div className="row">
                    <div className="col-xs-10  col-xs-offset-1">
                        <span className="aside-heading">Sort By</span>
                        <select className="aside-dropdown"
                                onChange={e => this.props.doSort(e.target.value)}
                        >
                            <option value="timestamp">Date Updated</option>
                            <option value="voteScore">Vote Score</option>
                        </select>

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
        doSort: (sortType) => dispatch(actions.sortPosts(sortType))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsSorter);