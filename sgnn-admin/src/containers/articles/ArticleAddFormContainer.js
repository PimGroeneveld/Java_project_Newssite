import React , {Component} from 'react';
import AddFormSchema from '../../components/articles/AddFormSchema.js';

class ArticleAddFormContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      journalists: [],
      categories: [],
      regions: [],
      formData: null
    }
    this.handleNewArticleFormSubmit = this.handleNewArticleFormSubmit.bind(this);
  }

  componentDidMount(){

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

  handleNewArticleFormSubmit(event) {
    const categories = event.formData.categories;
    const generalCategoryLink = "http://localhost:3000/categories/1";
    if(categories){
      if(!categories.includes(generalCategoryLink)){
        categories.push(generalCategoryLink);
      }
    }
    else {
      categories.push(generalCategoryLink);
    }


    const today = new Date();

    fetch('/articles', {
      method: "POST",
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
    }).then(() => {
      window.location = '/articles';
    })
  }


  render(){

    return(
      <div className="article-form-container">
        <h2>Add new article</h2>

        <AddFormSchema journalists={this.state.journalists} categories={this.state.categories} regions={this.state.regions} onNewArticleFormSubmit={this.handleNewArticleFormSubmit} formData={this.state.formData}/>

        {/* <form action="">
          <label htmlFor="headline">Headline : </label>
          <input type="text" name="headline" required/>
          <br/>
          <label htmlFor="summary">Summary : </label>
          <input type="text" name="summary" required/>
          <br/>
          <label htmlFor="story">Full Story : </label>
          <textarea name="story" id="story" cols="30" rows="10"/>
          <br/>
          <label htmlFor="imageUrl">Image Link :</label>
          <input type="text" name="imageUrl"/>
          <br/>
          <label htmlFor="categories">Categories :</label>
          <select name="categories" id="categories">
            <option value="">Choose a category</option>
            {categoriesOptions}
          </select>
          <br/>
          <label htmlFor="region">Region :</label>
          <select name="region" id="region">
            <option value="">Choose a region</option>
            <option key="0" value="Scotland">Scotland</option>
            <option key="1" value="England">England</option>
            <option key="2" value="Wales">Wales</option>
            <option key="3" value="NorthernIreland">Northern Ireland</option>
          </select>
          <br/>
          <label htmlFor="journalists">Journalists :</label>
          <select name="journalists" id="journalists">
            <option value="">Choose a journalist</option>
            {journalistsOptions}
          </select>
          <input type="hidden" id="publishDate" name="publishDate" value={LocalDateTime.now()}/>
        </form> */}
      </div>
    )
  }

}

export default ArticleAddFormContainer;
