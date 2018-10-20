import React, { Component } from 'react';

class JournalistEditFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {journalistInfo: null}
    this.url = props.url;
    this.jId = props.jId;
    console.log("editform url", this.url)
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      console.log("editform data:", data)
      this.setState({journalistInfo: data})
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("event:", event);
    // console.log("props in handlesubmit", props);
    const urlj = "/journalists/" + event.target.id.value;
    //will automatically add the localhost8080 in front
    fetch(urlj, {
      method: "PUT",
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
      window.location = urlj;
    })
  }

  render() {
    return(
      <div className = "form">
        <h1>Edit Journalist</h1>

        <form onSubmit = { this.handleSubmit }>
          <input type = "text" placeholder = "Name" name = "name"></input>
          <br/>
          <input type = "text" placeholder = "City of residence" name = "cityOfResidence"></input>
          <br/>
          <input type = "text" placeholder = "Email" name = "email"></input>
          <br/>
          <input type = "text" placeholder = "Phone" name = "phone"></input>
          <br/>
          <input type="hidden" name="id" value={this.jId}></input>
          <button type = "submit">Save</button>
        </form>
      </div>
      // <input type = "text" placeholder = "Picture url" name = "picture"></input>
      // <br/>
      // maybe leave picture out for now?
    )
  }
}

export default JournalistEditFormContainer;
