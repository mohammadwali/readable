import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class CommentEditForm extends Component {

    componentDidMount() {
        this.props.initialize({comment: this.props.comment, commentId: this.props.commentId});
    }


    render() {
        const {handleSubmit, cancelEdit, error, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <Field name="comment" className="form-control" placeholder="Your Comment..."
                           component="textarea" rows={2}/>
                </div>
                <div className="col-md-12">
                    {error && (<div className="pull-left comment-item-edit-error">Error: {error}</div>)}

                    <div className="pull-right">
                        <button type="submit" className="btn btn-primary">Update comment</button>
                        <a onClick={cancelEdit} className="btn btn-default">Cancel</a>
                    </div>
                </div>
            </form>
        )
    }
}


export default reduxForm({})(CommentEditForm);

