import React, {Component} from 'react';

import Header from './Header.component';
import PostsList from './PostsList.component';


class Home extends Component {
    render() {

        return (
            <div>
                <Header/>

                <div className="container">
                    <div className="row">

                        <div className="col-md-8">
                            <PostsList/>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}


export default Home;

