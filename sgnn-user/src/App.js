import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
      </Router>
    );
  }
}

export default App;
