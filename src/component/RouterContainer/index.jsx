import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import BestGames from "../../pages/BestGames";
import authService from "../../service/AuthService";

export default class RouterContainer extends Component {
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
        return (<Routes>
            <Route path="/" element={<Login loggedUser={this.state.loggedUser}/>}/>
            <Route path="/sign-in" element={<Login loggedUser={this.state.loggedUser}/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/best-games" element={<BestGames loggedUser={this.state.loggedUser}/>}/>
        </Routes>);
    }
}