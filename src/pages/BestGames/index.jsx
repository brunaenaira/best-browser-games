import {Component} from "react";
import NavBar from "../../component/NavBar";
import GameCard from "../../component/GameCard"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Col, Container, Pagination, Row} from "react-bootstrap";
import Api from "../../service/Api";
import {forEach} from "react-bootstrap/ElementChildren";
import {count} from "react-table/src/aggregations";

export default class BestGames extends Component {
    constructor(props) {
        super(props);
        this.state = {games: [], limit: 16, activePage: 1, prevPage: null, nextPage: null}
    }


    handleCallApi(page) {
        Api.get("/api/games", {params: {page: page}})
            .then(res => {
                const games = res.data.results.map(game => ({
                    id: game.id,
                    name: game.name,
                    description: game.genres[0].name,
                    imageUrl: game.background_image,
                    year: game.released
                }));
                const count = Math.ceil(res.data.count / 16)
                const prevPage = res.data.previous ? this.state.activePage - 1 : this.state.prevPage
                const nextPage = res.data.next ? this.state.activePage + 1 : this.state.nextPage
                this.setState({games, count, prevPage, nextPage})
            });
    }


    componentDidMount() {
        this.handleCallApi(this.state.activePage)
    }

    pageClick(page) {
        this.setState({activePage: page})
        this.handleCallApi(this.state.activePage)
    }

    render() {
        let items = []
        for (let page = this.state.activePage; page <= (this.state.count / 16) && page <= this.state.activePage + 8; page++) {
            items.push(<Pagination.Item key={page} active={page === this.state.activePage} onClick={() => {
                this.pageClick(page)
            }}>{page}</Pagination.Item>)
        }
        return (<>
            <NavBar loggedUser={this.props.loggedUser}/>
            <Container>
                <Row className="container-box-flex">
                    {this.state.games.map((game, k) => (<Col key={k} xs={60} md={4} lg={3}>
                        <GameCard game={game}/>
                    </Col>))}
                </Row>
                <Pagination className="justify-content-center">
                    <Pagination.First onClick={() => {
                        this.setState({activePage: 1})
                    }}/>
                    {items}
                    <Pagination.Last onClick={() => {
                        this.setState({activePage: this.state.count})
                    }}/>
                </Pagination>
            </Container>
        </>)
    }
}
{/*<Pagination.Prev onClick={() => {*/
}
{/*    this.setState({activePage: this.state.activePage === 1 ? this.state.activePage : this.state.activePage - 1})*/
}
{/*}}/>*/
}
{/*<Pagination.Next onClick={() => {*/
}
{/*    this.setState({activePage: this.state.activePage === this.state.count ? this.state.activePage : this.state.activePage + 1})*/
}
{/*}}/>*/
}
