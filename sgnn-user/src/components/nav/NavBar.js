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

  toggleRegionBar(event) {
    const regionNavbar = document.querySelector(".navbar-bottom ul");
    if(regionNavbar.style.display !== "block") {
      regionNavbar.style.display = "block";
    } else {
      regionNavbar.style.display = "none";
    }
  }

  componentDidMount() {
    fetch("/categories")
      .then(res => res.json())
      .then(data => {
        this.setState({
          categories: data._embedded.categories
        })
      })
    fetch("/regions")
      .then(res => res.json())
      .then(data => {
        this.setState({
          regions: data._embedded.regions
        })
      })
  }

  render() {
    const navCategoryLinks = this.state.categories.map((category, index) => {
      return(
        <li key = { index }>
            <Link className = "categories-navbar" to = { "/articles/category/" + category.id }>{ category.name.toLowerCase() }</Link>
        </li>
      )
    })

    return(
      <header>
        <ul>
          <li>
              <Link className = "categories-navbar" to = "/" onClick = { this.toggleRegionBar }>UK</Link>
          </li>
          { navCategoryLinks }
          <li>
            <button className= "nightmode-button" data-switch-contrast aria-hidden onClick = {this.handleNightmode}>Night mode</button>
          </li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
