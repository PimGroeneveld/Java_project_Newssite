import React, { Component } from 'react';

class NavBarTop extends Component {
  render() {
    return(
      <div className = "navbar-top">
        <div className = "search-box">
          <input></input>
          <button type = "submit">Search</button>
        </div>
      </div>
      
    )
  }
}

export default NavBarTop;