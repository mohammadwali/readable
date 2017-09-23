import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SubmissionError} from 'redux-form';

import history from '../utils/history'

import * as postActions from '../actions/postActions';
import * as categoryActions from '../actions/categoryActions';

import Header from './Header.component';
import PostForm from './PostForm.component';

class PostAdd extends Component {

    componentWillMount() {
        if (!this.props.categories.length) {
            this.props.loadCategories();
        }
    }


    onPostSubmit(values) {
        if (!values.title || values.title.trim() === "") {
            throw new SubmissionError({
                _error: "Post title is required"
            })
        }

        if (!values.author || values.author.trim() === "") {
            throw new SubmissionError({
                _error: "Author name is required"
            })
        }


        if (!values.category || values.category.trim() === "") {
            throw new SubmissionError({
                _error: "Please select a category"
            })
        }


        if (!values.body || values.body.trim() === "") {
            throw new SubmissionError({
                _error: "Post description cannot be empty."
            })
        }


        this.props.addNewPost(values);
    }


    render() {


        return (
            <div>
                <Header/>


                <div className="container">


                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 bg-container">


                            <div className="row">
                                <div className="container-fluid post-form-container">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2>Add new Post</h2>
                                        </div>
                                    </div>
                                    <PostForm onSubmit={this.onPostSubmit.bind(this)}
                                              categories={this.props.categories}/>
                                </div>
                            </div>

                        </div>
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
        loadCategories: () => dispatch(categoryActions.loadCategories()),
        addNewPost: (values) => {
            postActions.addNewPost(values)
                .then(result => (result.id && history.push("/")))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostAdd)

