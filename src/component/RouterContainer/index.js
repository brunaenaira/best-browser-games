import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";

export default class RouterContainer extends Component {
    render() {
        return (<Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/sign-in" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>);
    }
}