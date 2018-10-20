import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ArticleDetailContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      article: null,
      journalists: []
    }
    this.url = props.url;
  };

  componentDidMount(){
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      this.setState({article: data, journalists: data._embedded.journalists})
    })
  }


  render(){
    if (!this.state.article) return null;

    const journalists = this.state.journalists.map((journalist) => {
      const journalistUrl ="/journalists/"+journalist.id;
      return <Link key={journalist.id} to={journalistUrl}>{journalist.name}</Link>
    });

    return(
      <div className="article-detail-container">
        <h1>Article Details</h1>
        <a href="">Edit</a>
        <a href="">Delete</a>
        <a href="/articles">Back</a>
        <div className="article-detail">
          <h2>{this.state.article.headline}</h2>
          <h5>Published Date: {this.state.article.publishDate}</h5>
          <h6>By :
          {journalists}
          </h6>
          {/* <img src={this.state.article.imageUrl} alt="ArticleImage"/> */}
          <h3>Summary</h3>
          <p>{this.state.article.summary}</p>
          <h3>Description</h3>
          <p>{this.state.article.fullStory}</p>
        </div>
      </div>

    )}

  }

  export default ArticleDetailContainer;
