import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Link} from 'react-router-dom';

import Header from '../Header';
import PostsList from '../PostsList';


class Home extends Component {
    render() {
        const {posts} = this.props;

        return (
            <div>
                <Header/>

                <div className="container">
                    <div className="row">

                        <div className="col-md-8">
                            <PostsList posts={posts}/>
                        </div>


                    </div>
                </div>
                <Link to="/hello">Hey</Link>
            </div>
        )
    }
}


function mapStateToProps({posts}) {
    //converting to array to loop easily
    const transformedPosts = Object.keys(posts).map(id => posts[id]);

    return {
        posts: transformedPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

