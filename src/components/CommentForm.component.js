import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'

class CommentForm extends Component {

    render() {
        const {error, handleSubmit, submitting} = this.props;
        return (
            <div id="comment-form">
                <h2 className="comments-head">
                    <i className="fa fa-comment-o"/>
                    Add a comment</h2>
                <form className="app-form clearfix" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <Field name="name" className="form-control" placeholder="Name" component="input" type="text"/>
                    </div>
                    <div className="col-md-6">
                        <Field name="email" className="form-control" placeholder="E-mail" component="input"
                               type="email"/>
                    </div>
                    <div className="col-md-12">

                        <Field name="comment" className="form-control" placeholder="Your Comment..."
                               component="textarea" rows={6}/>

                        {
                            error &&

                            <div className="app-form-error">
                                {error}
                            </div>
                        }

                        <button type="submit" disabled={submitting} className="btn btn-primary">Add comment</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default reduxForm({
    form: 'comment-form'
})(CommentForm)
