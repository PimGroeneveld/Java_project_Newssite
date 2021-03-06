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
        "cityOfResidence": event.target.cityOfResidence.value,
        "email": event.target.email.value,
        "phone": event.target.phone.value,
        // "image": event.target.picture.value
        //this correct route?
      })
    })
    .then(() => {
      window.location = "/journalists";
    })
  }

  handleFormCancel(event){
    window.location = "/journalists";
  }

  render() {
    return(
      <div className = "form">
        <h1>Create New Journalist</h1>

        <form onSubmit = { this.handleSubmit }>
          <input type = "text" placeholder = "Name" name = "name" className="journalist-form-text"></input>
          <br/>
          <input type = "text" placeholder = "City of residence" name = "cityOfResidence" className="journalist-form-text"></input>
          <br/>
          <input type = "email" placeholder = "Email" name = "email" className="journalist-form-text"></input>
          <br/>
          <input type = "tel" placeholder = "Phone" name = "phone" className="journalist-form-text" pattern="[0-9]{1}[0-9]{9}" title="Please enter 10 digit phone number"></input>
          <br/>
          <div>
            <button type="submit" className="submit-button">Save</button>
            <button type="button" onClick={this.handleFormCancel} className="cancel-button">Cancel</button>
          </div>

          </form>
      </div>
      // <input type = "text" placeholder = "Picture url" name = "picture"></input>
      // <br/>
      // maybe leave picture out for now?
    )
  }
}

export default JournalistFormContainer;
