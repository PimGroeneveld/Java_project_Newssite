import React, {Component} from 'react';
import AddFormSchema from '../../components/articles/AddFormSchema.js';

class ArticleEditFormContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      article: null,
      journalists: [],
      categories: [],
      regions: [],
      formData: null
    }
    this.url = props.url;
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
  }

  componentDidMount(){

    fetch(this.url)
    .then(response => response.json())
    .then((data) => {
      this.setState({article: data, formData: data})
    })

    fetch('/journalists')
    .then(response => response.json())
    .then((data) => {
      this.setState({journalists: data._embedded.journalists})
    })

    fetch('/categories')
    .then(response => response.json())
    .then((data) => {
      this.setState({categories: data._embedded.categories})
    })

    fetch('/regions')
    .then(response => response.json())
    .then((data) => {
      this.setState({regions: data._embedded.regions});
    })
  }

  handleEditFormSubmit(event){

    console.log(event.formData.region);

    const today = new Date();
    const updateUrl="/articles/"+this.state.article.id;
    fetch(updateUrl, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "headline": event.formData.headline,
        "summary": event.formData.summary,
        "fullStory": event.formData.fullStory,
        "publishDate": today,
        "imageUrl": event.formData.imageUrl,
        "region": event.formData.region,
        "categories": event.formData.categories,
        "journalists": event.formData.journalists
      })
    })
    .then(response => response.json())
    .then(() => {
      window.location = updateUrl;
    })

  }

  render(){
    return(
      <div>
        <h1>Edit Article Details</h1>
      <AddFormSchema journalists={this.state.journalists} categories={this.state.categories} regions={this.state.regions} article={this.state.article} onEditArticleFormSubmit = {this.handleEditFormSubmit} formData={this.state.formData}/>

      </div>
    )
  }

}

export default ArticleEditFormContainer;
