import React, { Component } from 'react';
import MainArticle from '../components/articles/MainArticle';
import ArticleList from '../containers/ArticleList';
import Pagination from "react-js-pagination";

class NewsFeedContainer extends Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.state = {
      articles: [],
      totalArticlesCount: 0,
      activePage: 1,
      totalPages: 1
    }
  }
  //set state for nightmode

  componentDidMount() {
    console.log(this.url);
    fetch(this.url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.content) {
            this.setState({articles: data.content, totalArticlesCount:data.totalElements, activePage: data.pageable.pageNumber+1, totalPages: data.totalPages})
        }
        else {
          this.setState({ articles: this.sortArticles(data._embedded.articles) })
        }

      // if(data._embedded) {
      //   this.setState({ articles: this.sortArticles(data._embedded.articles) })
      // } else {
      //   this.setState({ articles: this.sortArticles(data) })
      // }
    })
  }

  sortArticles(data) {
    return data.sort((a,b) => { return Date.parse(b.publishDate) - Date.parse(a.publishDate) })
  }

  handlePageChange(event){
    if(event == 1){
      window.location = "/articles"
    }
    else {
      const url = "/articles/page/"+(event-1);
      window.location = url
    }

  }

  render() {
    return(
      <div className = "news-feed-container">
        <MainArticle article = { this.state.articles[0] } />
        <hr/>
        <ArticleList articles = { this.state.articles.slice(1) }/>
        <div className="articles-pagination">
          <Pagination
            hideDisabled
            activePage={this.state.activePage}
            pageRangeDisplayed={this.state.totalPages}
            totalItemsCount={11}
            onChange={this.handlePageChange}/>
        </div>
      </div>
    )
  }
}

export default NewsFeedContainer;
