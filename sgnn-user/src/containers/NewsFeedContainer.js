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
  //set state for nightmode

  componentDidMount() {
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        if(data._embedded) {
          this.setState({ articles: this.sortArticles(data._embedded.articles) })
        } else {
          this.setState({ articles: this.sortArticles(data) })
        }
      })
  }

  sortArticles(data) {
    return data.sort((a,b) => { return Date.parse(b.publishDate) - Date.parse(a.publishDate) })
  }

  render() {
    return(
      <div id="all-articles" className = "news-feed-container">
        <MainArticle article = { this.state.articles[0] } />
        <hr/>
        <ArticleList articles = { this.state.articles.slice(1) }/>
      </div>
    )
  }
}

export default NewsFeedContainer;
