import React, {Component} from 'react'
import {connect} from 'react-redux'
import Truncate from 'react-truncate'

class PostsList extends Component {
    render() {


        return (
            <div id="posts">


                {
                    this.props.posts.map(post => {


                        return (

                            <div className="post" key={post.id}>
                                <div className="row">

                                    <div className="col-md-10  col-md-offset-1">
                                        <h2 className="post-title"><a href={ "/post/" + post.id }>{ post.title } </a>
                                        </h2>
                                        <p className="post-description">

                                            <Truncate lines={4}
                                                      ellipsis={
                                                          <span>...</span>
                                                      }>

                                                { post.body  }
                                            </Truncate>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-10  col-md-offset-1">
                                        <div className="row">
                                            <div className="post-info row text-center">


                                                <div className="col-md-3">
                                                    <span className="glyphicon glyphicon-calendar"/>
                                                    &nbsp; 6. May, 2014
                                                </div>
                                                <div className="col-md-3">

                                                    <span className="glyphicon glyphicon-comment"/>
                                                    &nbsp;
                                                    <a >0 Comments</a>

                                                </div>

                                                <div className="col-md-3">

                                                    <span className="glyphicon glyphicon-tag"/>
                                                    &nbsp;
                                                    <a >Technology</a>

                                                </div>
                                                <div className="col-md-3 text-right">

                                                    <div className="post-reaction">
                                                        <span className="glyphicon glyphicon-star"/>
                                                        <a >0 </a>
                                                    </div>

                                                    <div className="post-reaction">
                                                        <span className="glyphicon glyphicon-thumbs-up"/>
                                                        <a >0 </a>
                                                    </div>

                                                    <div className="post-reaction">
                                                        <span className="glyphicon glyphicon-thumbs-down"/>
                                                        <a >10 </a>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )


                    })


                }


            </div>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList)