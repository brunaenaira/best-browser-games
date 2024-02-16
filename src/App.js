import './App.css';
import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import RouterContainer from "./component/RouterContainer";

export default function App() {
    return (<BrowserRouter>
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/sign-in'}>BBGames</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link" to={'/sign-in'}>Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={'/sign-up'}>Sign up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <RouterContainer/>
                </div>
            </div>
        </div>
    </BrowserRouter>)
}