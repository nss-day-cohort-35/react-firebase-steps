import React, {Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';

class Board extends Component {

  goToSingleBoard = () => {
    this.props.setSingleBoard(this.props.board.id);
  }

  render(){
    const {board} = this.props;
    return (
      <>
        <Card body>
          <CardTitle>{board.name}</CardTitle>
          <CardText>{board.description}</CardText>
          <Button onClick={this.editBoard}>Edit</Button>
          <Button onClick={this.goToSingleBoard}>View</Button>
        </Card>
      </>
    )
  }
}

export default Board;