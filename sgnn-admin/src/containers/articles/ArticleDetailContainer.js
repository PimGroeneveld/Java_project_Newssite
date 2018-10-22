import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
// import EditArticleButton from "../../components/articles/EditArticleButton";

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
      message: 'Are you sure to remove this article?',
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

    const categories = this.state.article.categories.map((category) => {
      return category.name+" "
    });

    const editUrl = "/articles/"+this.state.article.id+"/edit";
    let formattedDate = moment(this.state.article.publishDate).format("DD/MM/YY hh:mm:ss");

    console.log( this.state.article);
    return(
      <div className="article-detail-container">
        <h1>Article Details</h1>
        <div className = "edit-article-button-wrapper">
          <a className = "edit-article-button" href={editUrl}>Edit</a>
        </div>
        <div className="article-detail">
          <h2>{this.state.article.headline}</h2>
          <h5>Published Date: {formattedDate}</h5>
          <h5>By :
            {journalists}
          </h5>
          <h5>Categories :
            {categories}
          </h5>
          <h5>Region : {this.state.article.region.regionName}</h5>
          <img src={this.state.article.imageUrl} alt="ArticleImage" className="article-image"/>
          <h3>Summary</h3>
          <p>{this.state.article.summary}</p>
          <h3>Description</h3>
          <p>{this.state.article.fullStory}</p>
        </div>
        <div className = "delete-back-button-wrapper" >
          <a className = "delete-article-button" href="." onClick={this.handleDeleteClick}>Delete</a>
          <a className = "back-button" href="/articles">Back</a>
        </div>
      </div>

    )}

  }

  export default ArticleDetailContainer;
