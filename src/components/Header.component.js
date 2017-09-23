import React, {Component} from 'react'
import  {Link} from 'react-router-dom';
import logo from '../images/logo.png';


class Header extends Component {
    render() {

        return (
            <header>
                <div className="container">
                    <div className="row">

                        <div className="col-md-2">
                            <Link className="logo" to="/">
                                <img alt="logo" src={logo}/>
                                <span>Readable</span>
                            </Link>
                        </div>

                        <div className="col-md-1 pull-right text-right header-new-button">

                            <Link className="btn btn-danger btn-sm" to="/post/add">
                                + &nbsp;New Post
                            </Link>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}


export default Header;