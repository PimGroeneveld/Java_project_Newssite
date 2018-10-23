import React, { Component } from 'react';
import Paragraph from './Paragraph';
import prettyDate from '../../helpers/Date';
import ViewCountBox from '../articles/ViewCountBox';

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
      .then( () => {
        fetch("/articles/" + this.id, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            viewCount: this.state.article.viewCount + 1
          })
        })
      })
  }

  render() {
    if(!this.state.article) {
      return null;
    }

    const paragraphArray = this.state.article.fullStory.split("\n");
    const paragraphElements = paragraphArray.map((paragraph, index) => {
      return <Paragraph key = { index } paragraph = { paragraph } />
    })

    return(
      <div className = "full-article">
        <h1>{ this.state.article.headline }</h1>
        <p className = "preview-date">Published { prettyDate(this.state.article.publishDate) }</p>
        <ViewCountBox count = { this.state.article.viewCount } />
        <img src = { process.env.PUBLIC_URL + this.state.article.imageUrl } alt = "article" ></img>
        <h3>{ this.state.article.summary }</h3>
        { paragraphElements }
      </div>
    )
  }
}

export default ArticleContainer;