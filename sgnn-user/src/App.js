import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import NavBarTop from './components/nav/NavBarTop';
import NewsFeedContainer from './containers/NewsFeedContainer';
import ArticleContainer from './components/articles/ArticleContainer';
import Footer from './components/nav/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBarTop />
          <NavBar />
          <Route exact path = "/" render = { props => {
            // Adding the key forces the component to remount when props are updated
            return <NewsFeedContainer key = { props.match.params.id } url = "/articles" />
           } } />
          <Route exact path = "/articles/:id" component = { ArticleContainer } />
          <Route exact path = "/articles/category/:id" render = { props => {
            const url = "/articles/category/" + props.match.params.id;
            return <NewsFeedContainer key = { props.match.params.id } url = { url } />
          } } />
          <Route exact path = "/articles/search/:query" render = { props => {
            const url = "/articles/search/" + props.match.params.query;
            return <NewsFeedContainer key = { props.match.params.query } url = { url } />
          }} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
