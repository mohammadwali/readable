import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'

class PostForm extends Component {

    render() {
        const {error, handleSubmit, submitting} = this.props;

        return (
            <form className="app-form clearfix container-fluid" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-md-12">
                        <Field component="input" name="title" type="text" className="form-control"
                               placeholder="Post Title"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Field component="input" name="author" type="text" className="form-control"
                               placeholder="Author Name"/>
                    </div>
                    <div className="col-md-6">

                        <Field component="select" name="category" className="form-control">
                            <option value="">Category</option>
                            { this.props.categories.map(category => (
                                <option value={category.path}>{category.name}</option>)) }
                        </Field>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <Field component="textarea" name="body" className="form-control" rows={15}
                               placeholder="Post Description"/>

                        {
                            error &&

                            <div className="app-form-error">
                                {error}
                            </div>
                        }

                        <button type="submit" disabled={submitting} className="btn btn-primary">Add Post</button>
                    </div>
                </div>

            </form>
        )
    }
}


export default  reduxForm({
    form: 'post-form'
})(PostForm);

