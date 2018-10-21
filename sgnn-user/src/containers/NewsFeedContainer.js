import React, { Component } from 'react';
import MainArticle from '../components/articles/MainArticle';
import ArticleList from '../containers/ArticleList';

class NewsFeedContainer extends Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        if(data._embedded) {
          this.setState({ articles: data._embedded.articles })
        } else {
          this.setState({ articles: data })
        }
      })
  }

  render() {
    return(
      <div className = "news-feed-container">
        <MainArticle article = { this.state.articles[0] }/>     
        <hr/>
        <ArticleList articles = { this.state.articles }/> 
      </div>
    )
  }
}

export default NewsFeedContainer;