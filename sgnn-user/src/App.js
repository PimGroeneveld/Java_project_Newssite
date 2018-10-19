import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBarTop from './components/NavBarTop';
import NewsFeedContainer from './containers/NewsFeedContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBarTop />
          <NavBar />
          <Route exact path = "/" component = { NewsFeedContainer }></Route>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
