import React, {Component} from 'react'

import logo from '../images/logo.png';


class Header extends Component {
    render() {

        return (
            <header>
                <div className="container">
                    <div className="row">

                        <div className="col-md-2">
                            <div className="logo">
                                <img src={logo}/>
                                <span>Readable</span>
                            </div>
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