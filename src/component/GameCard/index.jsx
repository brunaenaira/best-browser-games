import {Component} from "react";
import Card from 'react-bootstrap/Card';

export default class GameCard extends Component {
    render() {
        return (<Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={this.props.game.imageUrl}/>
            <Card.Body>
                <Card.Title>{this.props.game.name}</Card.Title>
                <Card.Text>
                    {this.props.game.description}
                </Card.Text>
                <Card.Text>
                    {this.props.game.category}
                </Card.Text>
            </Card.Body>
        </Card>);
    }
}
