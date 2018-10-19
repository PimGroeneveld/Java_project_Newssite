import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    let categories = [];
    fetch("/articles")
      .then(res => res.json())
      .then(data => { 
        categories = data.map(article => {
          return article.categories;
        });
        categories = categories
                      .flat()
                      // Filters out unique categories
                      .filter((o, i, a) => i === a.findIndex((c) => (c.name === o.name)))
        this.setState({
          categories: categories
        })  
      })
  }

  render() {
    const navCategoryLinks = this.state.categories.map((category, index) => {
      return(
        <li key = { index }>
            <Link to = "/">{ category.name.toLowerCase() }</Link>
        </li>
      )
    })

    return(
      <header>
        <ul>
          <li>
              <Link to = "/">UK</Link>
          </li>
          { navCategoryLinks }
        </ul>
      </header>
    )
  }
}

export default NavBar;