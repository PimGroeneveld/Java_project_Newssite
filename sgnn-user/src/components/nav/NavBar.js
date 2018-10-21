import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      regions: []
    }
  }

  componentDidMount() {
    let categories = [];
    let regions = [];
    fetch("/articles")
      .then(res => res.json())
      .then(data => { 
        categories = data
                      .map(article => article.categories)
                      .flat()
                      .filter((o, i, a) => i === a.findIndex((c) => (c.name === o.name)))
        regions = data
                    .map(article => article.region)
                    .filter((o, i, a) => i === a.findIndex((c) => (c.regionName === o.regionName)))

        this.setState({
          categories: categories,
          regions: regions
        })  
      })
  }

  render() {
    const navCategoryLinks = this.state.categories.map((category, index) => {
      return(
        <li key = { index }>
            <Link to = { "/articles/category/" + category.id }>{ category.name.toLowerCase() }</Link>
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