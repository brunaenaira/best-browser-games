import React, {Component} from "react";
import {Link, Navigate} from "react-router-dom";
import authService from "../../service/AuthService";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: this.props.loggedUser
        }
    }

    handleLogoff() {
        authService.logoff()
        this.setState({loggedUser: null})
    }

    render() {
        if (!this.state.loggedUser) {
            return <Navigate to={"/"}/>
        }
        return (<nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>BBGames</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><p className="nav-fill">Ola {this.state.loggedUser.fullName}</p></li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link className="nav-link" to={'/'}
                                                       onClick={this.handleLogoff}>Logoff</Link></li>
                    </ul>
                </div>
            </div>
        </nav>)
    }
}