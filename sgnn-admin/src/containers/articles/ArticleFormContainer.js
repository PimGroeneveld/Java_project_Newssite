import React , {Component} from 'react';
import Form from 'react-jsonschema-form';

import FormSchema from '../../components/articles/FormSchema.js';

class ArticleFormContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      journalists: [],
      categories: []
    }
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
  }


  render(){



    // const journalistsOptions = this.state.journalists.map((journalist, index) => {
    //   return <option key={index} value={journalist.id}>{journalist.name}</option>
    // });
    //
    // const categoriesOptions = this.state.categories.map((category, index) => {
    //   return <option key={index} value={category.id}>{category.name}</option>
    // });

    return(
      <div className="article-form-container">
        <h2>Add new article</h2>
        <FormSchema journalists={this.state.journalists} categories={this.state.categories} />
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

export default ArticleFormContainer;
