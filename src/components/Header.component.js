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
                                <img src={logo}/>
                                <span>Readable</span>
                            </Link>
                        </div>

                        <div className="col-md-1 pull-right text-right header-new-button">
                            <button type="button" className="btn btn-danger btn-sm">+ &nbsp;New Post</button>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}


export default Header;