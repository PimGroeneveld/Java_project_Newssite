import React, { Component } from 'react';

class ArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      article: null
    }
  }

  componentDidMount() {
    fetch("/articles/" + this.id)
      .then(res => res.json())
      .then(data => {
        this.setState({ article: data })
      })
  }

  render() {
    if(!this.state.article) {
      return null;
    }

    return(
      <div className = "full-article">
        <img src = {process.env.PUBLIC_URL + this.state.article.imageUrl } ></img>
        <h1>{ this.state.article.headline }</h1>
        <p>{ this.state.article.fullStory }</p>
      </div>
    )
  }
}

export default ArticleContainer;