import React, {Component} from 'react';

import Header from './Header.component';
import PostsList from './PostsList.component';
import CategoryList from './CategoryList.component';

class Home extends Component {

    render() {


        return (
            <div>
                <Header/>

                <div className="container">
                    <div className="row">

                        <div className="col-md-8">
                            <PostsList category={this.props.match.params.category}/>
                        </div>

                        <div className="col-md-4">

                            <aside>



                                <CategoryList/>

                            </aside>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Home;

