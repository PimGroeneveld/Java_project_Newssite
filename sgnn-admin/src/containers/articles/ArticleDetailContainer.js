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
      return " "+category.name+"   "
    });

    const editUrl = "/articles/"+this.state.article.id+"/edit";
    let formattedDate = moment(this.state.article.publishDate).format("DD/MM/YY HH:mm:ss");

    return(
      <div className="article-detail-container">
        <h1>Article Details</h1>

        <div className = "edit-article-button-wrapper">
          <a className = "edit-article-button" href={editUrl}>Edit</a>
        </div>
        
        <div className="article-detail-single">
          <div className="article-detail">
            <div className="article-bulletpoints">
              <h2>{this.state.article.headline}</h2>
              <h3>Published Date : {formattedDate}</h3>
              <h4>By :
                {journalists}
              </h4>
              <h4>Categories :
                {categories}
              </h4>
              <h4>Region : {this.state.article.region.regionName.split('_').join(' ')}</h4>
            </div>
            <div className="article-image-wrapper">
              <img src={this.state.article.imageUrl} alt="ArticleImage" className="article-image"/>
            </div>
          </div>
          <div className="article-text">
            <h3>Summary</h3>
            <p>{this.state.article.summary}</p>
            <h3>Description</h3>
            <p>{this.state.article.fullStory}</p>
          </div>
        </div>
        <div className = "delete-back-button-wrapper" >
          <a className = "delete-article-button" href="." onClick={this.handleDeleteClick}>Delete</a>
          <a className = "back-button" href="/articles">Back</a>
        </div>

      </div>
    )}

  }

  export default ArticleDetailContainer;
