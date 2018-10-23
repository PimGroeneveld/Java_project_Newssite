import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: []
    }
  }

  componentDidMount() {
    let regions = [];
    fetch("/articles")
      .then(res => res.json())
      .then(data => {
        regions = data._embedded.articles
                    .map(article => article.region)
                    .filter((o, i, a) => i === a.findIndex((c) => (c.regionName === o.regionName)))

        this.setState({
          regions: regions
        })
      })
  }

  formatRegionName(name) {
    let nameArray = name.toLowerCase().split("_");
    nameArray = nameArray.map(word => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    })

    return nameArray.join(" ");
  }

  render() {
    const navRegionLinks = this.state.regions.map(region => {
      return(
        <li key = { Math.random() } >
            <Link
              to = { "/articles/region/" + region.regionName }>{ this.formatRegionName(region.regionName) }
            </Link>
        </li>
      )
    })

    return(
      <div className = "navbar-bottom">
        <ul>
          { navRegionLinks }
        </ul>
      </div>
    )
  }
}

export default NavBarBottom;
