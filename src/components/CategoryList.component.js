import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {NavLink} from 'react-router-dom';
import * as actions from '../actions/categoryActions';
import {withRouter} from 'react-router';

class CategoryList extends Component {
    componentWillMount() {
        if (!this.props.categories.length) {
            this.props.loadCategories();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return ((this.props.location.pathname !== nextProps.location.pathname) || this.props.categories.length !== nextProps.categories.length);
    }


    render() {
        const {categories} = this.props;

        console.log(this.props.location)

        return (
            <div className="bg-container">
                <div className="row">
                    <div className="col-xs-10  col-xs-offset-1" id="categories">
                        <h6 className="aside-heading">Categories</h6>
                        <ul>
                            {
                                categories.map(item => (<li key={item.path}>
                                    <NavLink to={`/${item.path}`} activeClassName="active">
                                        {item.name}
                                    </NavLink>
                                </li>))
                            }
                        </ul>

                    </div>
                </div>
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList));