import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase.auth';
import fbConnection from './helpers/data/fbConnection';
import './App.scss';

//make a connection when app first loads
fbConnection();


class App extends Component {
  state = {

  }

  authListener = () => firebase.auth().onAuthStateChanged((user) => {
    console.log("authListener called", user);
  })

  componentDidMount() {
    // console.log("componentDidMount called");
    this.authListener();
  }

  componentWillUnmount() {
    // console.log('componentWillUnMount called')
  }

  render() {

    return (
      <div className="App">
        <h2>Ready to GO.</h2>
      </div>
    );
  }
}

export default App;
