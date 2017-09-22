import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';
import * as actions from '../actions/categoryActions';

class CategoryList extends Component {
    componentWillMount() {
        if (!this.props.categories.length) {
            this.props.loadCategories();
        }
    }

    render() {
        const {categories} = this.props;

        return (
            <div className="col-xs-10  col-xs-offset-1" id="categories">
                <h6 className="aside-heading">Categories</h6>
                <ul>
                    {
                        categories.map(item => (<li key={item.path}>
                            <Link to={`/${item.path}`}>
                                {item.name}
                            </Link>
                        </li>))
                    }
                </ul>

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadCategories: () => dispatch(actions.loadCategories())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);