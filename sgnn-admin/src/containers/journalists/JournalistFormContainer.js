import React, { Component } from 'react';

class JournalistFormContainer extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log("event:", event);
    //will automatically add the localhost8080 in front
    fetch("/journalists", {
      method: "POST",
      //set content type (get json back instead of HTML)
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": event.target.name.value,
        "image": event.target.picture.value
        //this correct route?
      })
    })
    .then(() => {
      window.location = "/journalists";
    })
  }

  render() {
    return(
      <div className = "form">
        <h1>Create New Journalist</h1>

        <form onSubmit = { this.handleSubmit }>
          <input type = "text" placeholder = "Name" name = "name"></input>
          <br/>
          <input type = "text" placeholder = "Picture url" name = "picture"></input>
          <br/>
          <button type = "submit">Save</button>
        </form>
      </div>
    )
  }
}

export default JournalistFormContainer;
