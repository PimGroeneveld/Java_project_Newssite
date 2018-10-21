import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ArticleList from '../../components/articles/ArticleList.js';
import '../../css/ArticlesStyles.css';

class ArticleContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      redirect: false,
      articleId: 0
    }
    this.url = props.url;
    this.handleRowClick = this.handleRowClick.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount(){
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      console.log("mounted",data);
      this.setState({articles: data});
    })
  }

  handleRowClick(id){
    this.setState({redirect: true, articleId: id});
  }

  renderRedirect(){
    const articleUrl = "/articles/"+this.state.articleId;
    if(this.state.redirect){
      return <Redirect to={articleUrl}/>
    }

  }

  render() {
    return(
      <div className="articles-container">
        <h1>Articles</h1>
        {this.renderRedirect()}
        <a href="/articles/new">Add new article</a>
        <ArticleList articles={this.state.articles} onRowClick={this.handleRowClick}/>
      </div>
    )
  }
}

export default ArticleContainer;
