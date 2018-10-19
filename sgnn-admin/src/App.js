import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import ArticleContainer from './containers/articles/ArticleContainer';
import HomeContainer from './containers/HomeContainer';
import JournalistContainer from './containers/journalists/JournalistContainer';
import JournalistFormContainer from './containers/journalists/JournalistFormContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path = "/" component = { HomeContainer } />
          <Route exact path = "/articles/" component = { ArticleContainer } />
          <Route exact path = "/journalists" component = { JournalistContainer } />
          <Route exact path = "/journalists/new" component = { JournalistFormContainer } />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
