import React, { Component } from 'react';

class NavBarTop extends Component {

  handleSubmit(event) {
    event.preventDefault();
    window.location = "/articles/search/" + event.target.query.value;
  }

  handleNightmode(event){
    document.body.classList.toggle('nightmode');
  }

  render() {
    return(
      <div className = "navbar-top">
        <ul>
            <li className = "logo">
              <a href = "/">
                <p>SGNN</p>
              </a>
            </li>
          <li>
            <div className = "search-box">
              <form onSubmit = { this.handleSubmit }>
                <input name = "query"></input>
                <button type = "submit">Search</button>
              </form>
            </div>
          </li>
        </ul>

      </div>

    )
  }
}

export default NavBarTop;
