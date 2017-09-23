import React, {Component} from 'react';

import Header from './Header.component';
import PostsList from './PostsList.component';
import CategoryList from './CategoryList.component';
import PostsSorter from './PostsSorter.component';

class Home extends Component {

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
                                    <form className="app-form clearfix container-fluid">

                                        <div className="row">
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Post Title"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Author Name"/>
                                            </div>
                                            <div className="col-md-6">
                                                <select name="" className="form-control">
                                                    <option value="">Category</option>


                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <textarea className="form-control" rows={15}
                                                          placeholder="Post Description"/>
                                                <a href="#" className="btn btn-primary">Add Post</a>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        )
    }
}


export default Home;

