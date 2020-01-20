import React, {Component} from 'react';

import authData from '../../helpers/data/authData';
import boardManager from '../../helpers/data/boardManager';


class BoardContainer extends Component {

  state = {
    boards: [],
  }

  getBoards = () => {
    boardManager.getBoardsByUid(authData.getUid())
    .then((boards) => {
      this.setState({
        boards: boards
      })
    })
  }

  componentDidMount() {
    this.getBoards();
  }

  render(){
    return(
      <h2>Board container</h2>
    )
  }
}

export default BoardContainer;