import './App.css';
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import RouterContainer from "./component/RouterContainer";
import authService from "./service/AuthService";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: null
        }
    }

    loadLoggedUser() {
        let user = authService.getLoggedUser()
        this.setState({loggedUser: user})
    }

    componentDidMount() {
        this.loadLoggedUser()
    }

    render() {
        return (<BrowserRouter>
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <RouterContainer loggedUser={this.state.loggedUser}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>)
    }
}