import React, {Component} from 'react';
import BoardManager from '../../helpers/data/boardManager';
import PinManager from '../../helpers/data/PinManager';
import {Card, CardHeader, CardBody, CardTitle, CardText, Button} from 'reactstrap';

class SingleBoard extends Component {
  state = {
    board: {},
    pins: [],
  }

  getData = () => {
    BoardManager.getSingleBoard(this.props.boardId)
    .then(boardResponse => {
      PinManager.getPinsByBoardId(this.props.boardId)
      .then(pinResponse => {
        this.setState({
          board: boardResponse,
          pins: pinResponse,
        })
      })
    })
  }

  componentDidMount(){
    this.getData();
  }

  render() {
console.log("what state", this.state.pins);
    return(
      <>
        <Card>
          <CardHeader tag="h3">{this.state.board.name}</CardHeader>
          <CardBody>
            <CardTitle>{this.state.board.description}</CardTitle>
            {this.state.pins.map(pin =>
              <h2 key={pin.id}>{pin.title}</h2>
            )}
          </CardBody>
        </Card>
      </>
    )
  }
}
export default SingleBoard;