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
    this.sortable = props.sortable;
    this.journalistId = props.journalistId;
    this.handleRowClick = this.handleRowClick.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.sortArticles = this.sortArticles.bind(this);

  }

  componentWillReceiveProps(props){
    console.log("RECIEV PROPS:"+ props);
    const {url, refreshList} = this.props;
    if (props.refreshList!== refreshList) {

      fetch(props.url)
      .then(response => response.json())
      .then((data) => {
        if(data._embedded){
          this.setState({articles: data._embedded.articles});
        }
        else {
          this.setState({articles: data});
        }
        if(this.sortable === "true"){
          this.sortArticles(this.state.articles);
          this.setState({articles: this.state.articles});
        }
    })
    console.log(this.state.articles);
    }
    else {
      console.log("equal");
    }
  }

  componentDidMount(){
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      if(data._embedded){
        this.setState({articles: data._embedded.articles});
      }
      else {
        this.setState({articles: data});
      }

      if(this.sortable === "true"){
        this.sortArticles(this.state.articles);
        this.setState({articles: this.state.articles});
      }

  })
}

sortArticles(data) {
  return data.sort((a,b) => { return Date.parse(b.publishDate) - Date.parse(a.publishDate) })
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
        <a className= "add-article-button" href="/articles/new">Add new article</a>
        <ArticleList articles={this.state.articles} onRowClick={this.handleRowClick}/>
      </div>
    )
  }
}

export default ArticleContainer;
