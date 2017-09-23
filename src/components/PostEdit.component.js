import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostEditForm extends Component {

    componentDidMount() {
        this.props.initialize({body: this.props.post.body, title: this.props.post.title});
    }


    render() {
        const {handleSubmit, cancelEdit, error, submitting} = this.props;
        return (

            <form className="app-form" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-md-10  col-md-offset-1">
                        <Field component="input" type="text" placeholder="Post title" name="title"/>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-10  col-md-offset-1">
                        <Field component="textarea" placeholder="Post description" name="body" rows={7}/>
                    </div>
                </div>

                {error && (<div className="pull-left app-form-edit-error">Error: {error}</div>)}

                <div className="row">
                    <div className="col-md-10  col-md-offset-1 buttons-wrap">
                        <button disabled={submitting} type="submit" className="btn btn-sm btn-primary">Update</button>
                        <a onClick={cancelEdit} className="btn btn-sm btn-default">Cancel</a>
                    </div>
                </div>

            </form>
        )
    }
}


export default reduxForm({})(PostEditForm);

