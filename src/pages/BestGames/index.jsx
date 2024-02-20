import {Component} from "react";
import NavBar from "../../component/NavBar";

export default class BestGames extends Component {

    render() {
        return (<>
            <NavBar loggedUser={this.props.loggedUser}/>
            <h1>Best Games</h1>
        </>)
    }
}