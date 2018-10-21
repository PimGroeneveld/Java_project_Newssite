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
import JournalistDetailContainer from './containers/journalists/JournalistDetailContainer';
import JournalistEditFormContainer from './containers/journalists/JournalistEditFormContainer';
import JournalistDeleteContainer from './containers/journalists/JournalistDeleteContainer';

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
            {/*Show*/}
            <Route exact path="/journalists" render={() => {
              const url = "/journalists";
              return <JournalistContainer url={url}/>
            }} />
            {/*Add*/}
            <Route exact path = "/journalists/new" component = { JournalistFormContainer } />
            {/*Edit */}
            <Route exact path="/journalists/:id/edit" render={(props) => {
              const url = "/journalists/" + props.match.params.id;
              return <JournalistEditFormContainer url={url} jId={props.match.params.id}/>
            }} />
            {/*Show one*/}
            <Route exact path="/journalists/:id" render={(props) => {
              const url = "/journalists/" + props.match.params.id;
              return <JournalistDetailContainer url={url}/>
              }} />
              {/* (Pim) I think the issue is somewhere here with the route. Its not passing down props to JournalistDeleteContainer, since it hits /:id for the detailcontainer and then stops. Tried variations of exact path/path and didnt work*/}
              {/*Delete */}
          <Route path="/journalists/:id" render={(props) => {
            const url = "/journalists/" + props.match.params.id;
            return <JournalistDeleteContainer url={url}
              jId={props.match.params.id}/>
            }} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
