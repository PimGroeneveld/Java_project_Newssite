import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class ArticleDetailContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      article: null,
      journalists: []
    }
    this.url = props.url;
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  };

  componentDidMount(){
    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      this.setState({article: data, journalists: data.journalists})
    })
  }

  handleDeleteClick(event){
    event.preventDefault();
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to remove this article.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            fetch(this.url,{
              method: "DELETE",
              headers: {'Content-Type': 'application/json'},
            })
            .then( () => {
              window.location = '/articles';
            })
          }
        },
        {
          label: 'No',
          onClick: () => <Redirect to={this.url}/>
        }
      ]
    })
  }


  render(){
    if (!this.state.article) return null;

    const journalists = this.state.journalists.map((journalist) => {
      const journalistUrl ="/journalists/"+journalist.id;
      return <Link key={journalist.id} to={journalistUrl}>{journalist.name}</Link>
    });

    const editUrl = "/articles/"+this.state.article.id+"/edit";

    return(
      <div className="article-detail-container">
        <h1>Article Details</h1>
        <a href={editUrl}>Edit</a>
        <a href="." onClick={this.handleDeleteClick}>Delete</a>
        <a href="/articles">Back</a>
        <div className="article-detail">
          <h2>{this.state.article.headline}</h2>
          <h5>Published Date: {this.state.article.publishDate}</h5>
          <h6>By :
            {journalists}
          </h6>
          <h6>Region : {this.state.article.region.regionName}</h6>
          <img src={this.state.article.imageUrl} alt="ArticleImage"/>
          <h3>Summary</h3>
          <p>{this.state.article.summary}</p>
          <h3>Description</h3>
          <p>{this.state.article.fullStory}</p>
        </div>
      </div>

    )}

  }

  export default ArticleDetailContainer;
