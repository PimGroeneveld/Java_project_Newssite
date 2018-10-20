import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

import ArticleContainer from './containers/articles/ArticleContainer';
import ArticleDetailContainer from './containers/articles/ArticleDetailContainer.js';
import ArticleFormContainer from './containers/articles/ArticleFormContainer.js';

import HomeContainer from './containers/HomeContainer';
import JournalistContainer from './containers/journalists/JournalistContainer';
import JournalistFormContainer from './containers/journalists/JournalistFormContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path = "/" component = { HomeContainer } />

            {/* Articles routes */}
            <Route exact path = "/articles" render = {() => {
              const url = "/articles";
              return <ArticleContainer url={url}/>
            }} />

            <Route exact path= "/articles/new" component={ArticleFormContainer}/>

            <Route exact path="/articles/:id" render={(props) => {
              const url = "/articles/"+props.match.params.id;
              return <ArticleDetailContainer url={url}/>
            }
            }/>

            {/* Journalists routes */}
            Route exact path="/journalists" render={() => {
              const url = "/journalists";
              return <JournalistContainer url={url}/>
            }} />
            <Route exact path = "/journalists/new" component = { JournalistFormContainer } />
            <Route exact path="/journalists/:id" render={(props) => {
              const url = "/journalists/" + props.match.params.id; //ends up being something like /journalists/1?projection=embedShip
              return <JournalistContainer url={url}/>
              }} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
