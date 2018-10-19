import React, { Component } from 'react';
import MainArticle from '../components/MainArticle';

class NewsFeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch("/articles")
      .then(res => res.json())
      .then(data => {
        this.setState({ articles: data })
      })
  }

  render() {
    return(
      <div className = "news-feed-container">
        <MainArticle article = { this.state.articles[0] }/>      
        <hr/>
      </div>
    )
  }
}

export default NewsFeedContainer;