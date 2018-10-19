import React, { Component } from 'react';
import ArticleList from '../../components/articles/ArticleList.js';

class ArticleContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
    this.url = props.url;
  }

  componentDidMount(){
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      this.setState({articles: data})
    })
  }

  render() {
    return(
      <div className="articles-container">
        <h1>Articles</h1>
        <ArticleList articles={this.state.articles}/>
      </div>

    )
  }
}

export default ArticleContainer;
