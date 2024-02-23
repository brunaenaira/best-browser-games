import {Component} from "react";
import NavBar from "../../component/NavBar";
import GameCard from "../../component/GameCard"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Col, Container, Row} from "react-bootstrap";
import Api from "../../service/Api";

export default class BestGames extends Component {
    constructor(props) {
        super(props);
        this.state = {games: []}
    }

    componentDidMount() {
        Api.get("/api/games")
            .then(res => {
                console.log(res.data)
                const games = res.data.results.map(game => ({
                    id: game.id,
                    name: game.name,
                    description: game.genres[0].name,
                    imageUrl: game.background_image,
                    year: game.released
                }));
                this.setState({games});
            });
    }

    // componentDidMount() {
    //     Api.get("/api/games")
    //         .then(res => {
    //             console.log(res.data)
    //             const games = res.data.results.map(game => ({
    //                 id: game.guid,
    //                 name: game.name,
    //                 description: game.deck,
    //                 imageUrl: game.image.thumb_url,
    //                 year: game.expected_release_year
    //             }));
    //             this.setState({games});
    //         });
    // }


    // componentDidMount() {
    //     const games = [];
    //     for (let i = 0; i < 12; i++) {
    //         games.push({
    //             id: "3030-1",
    //             name: "Desert Strike: Return to the Gulf",
    //             description: "A top-down isometric helicopter shoot 'em up originally for the Sega Genesis, which was later ported to a variety of platforms. It is best known for its open-ended mission design and was followed by several sequels.",
    //             category: "RPG",
    //             imageUrl: "https://www.giantbomb.com/a/uploads/scale_avatar/9/93770/2370498-genesis_desertstrike_2__1_.jpg",
    //             year: 1992
    //         });
    //     }
    //     this.setState({games});
    // }

    render() {
        return (<>
            <NavBar loggedUser={this.props.loggedUser}/>
            <Container>
                <Row className="container-box-flex">
                    {this.state.games.map((game, k) => (<Col key={k} xs={60} md={4} lg={3}>
                        <GameCard game={game}/>
                    </Col>))}
                </Row>
            </Container></>)
    }
}
