import {Component} from "react";
import NavBar from "../../component/NavBar";
import GameCard from "../../component/GameCard"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Col, Container, Row} from "react-bootstrap";

export default class BestGames extends Component {

    render() {
        const games = [];
        for (let i = 0; i < 12; i++) {
            games.push(<GameCard key={i} game={{
                name: "GOD",
                category: "RPG",
                description: "God ofWar",
                imageUrl: "https://pbs.twimg.com/media/GAyeMZ9bcAASAyY?format=jpg&name=4096x4096"
            }}/>);
        }

        return (<div className="container-box-home">
            <NavBar loggedUser={this.props.loggedUser}/>
            <Container className="container container-fluid">
                <Row>
                    {games.map((game, k) => (<Col key={k} xs={48} md={4} lg={3}>
                        {game}
                    </Col>))}
                </Row>
            </Container></div>)
    }
}
