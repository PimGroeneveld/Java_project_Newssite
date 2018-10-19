import React, { Component } from 'react';

class JournalistFormContainer extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return(
      <div className = "form">
        <h1>Create New Journalist</h1>
  
        <form onSubmit = { this.handleSubmit }>
          <input type = "text" placeholder = "Name" name = "name"></input>
          <br/>
          <button type = "submit">Save</button>
        </form>
      </div>
    )
  }
}

export default JournalistFormContainer;