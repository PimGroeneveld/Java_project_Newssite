import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import NavBarTop from './components/nav/NavBarTop';
import NewsFeedContainer from './containers/NewsFeedContainer';
import ArticleContainer from './containers/ArticleContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBarTop />
          <NavBar />
          <Route exact path = "/" component = { NewsFeedContainer }></Route>
          <Route exact path = "/articles/:id" component = { ArticleContainer }></Route>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
