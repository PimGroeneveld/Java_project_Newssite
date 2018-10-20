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

  prettyDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const date = this.state.article.publishDate.split("T")[0].split("-");
    const time = this.state.article.publishDate.split("T")[1].split(":");
    return date[2] + " " + monthNames[date[1]] + " " + date[0] + " at " + time[0] + ":" + time[1];
  }

  render() {
    if(!this.state.article) {
      return null;
    }

    return(
      <div className = "full-article">
        <h1>{ this.state.article.headline }</h1>
        <p className = "date">{ this.prettyDate() }</p>
        <img src = { process.env.PUBLIC_URL + this.state.article.imageUrl } alt = "article" ></img>
        <p>{ this.state.article.fullStory }</p>
      </div>
    )
  }
}

export default ArticleContainer;