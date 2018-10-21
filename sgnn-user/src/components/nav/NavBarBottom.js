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
        regions = data
                    .map(article => article.region)
                    .filter((o, i, a) => i === a.findIndex((c) => (c.regionName === o.regionName)))

        this.setState({
          regions: regions
        })  
      })
  }

  render() {
    const navRegionLinks = this.state.regions.map(region => {
      return(
        <li key = { region.id }>
            <Link to = { "/articles/region/" + region.regionName }>{ region.regionName.toLowerCase() }</Link>
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