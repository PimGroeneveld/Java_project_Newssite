import React, { Component } from 'react';

class JournalistEditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {journalistInfo: null}
    this.url = props.url;
    this.jId = props.jId;
    console.log("props edit", props);
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      this.setState({journalistInfo: data})
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const urlj = "/journalists/" + event.target.id.value;
    fetch(urlj, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": event.target.name.value,
        "cityOfResidence": event.target.cityOfResidence.value,
        "email": event.target.email.value,
        "phone": event.target.phone.value,
      })
    })
    .then(() => {
      window.location = urlj;
    })
  }

  render() {
    if(!this.state.journalistInfo) return null;
    console.log("this.state.journalistInfo", this.state.journalistInfo);
    return(
      <div className = "form">
        <h1>Edit Journalist</h1>

        <form onSubmit = { this.handleSubmit } >
          <input type = "text" defaultValue = {this.state.journalistInfo.name} name = "name" className="journalist-form-text"></input>
          <br/>
          <input type = "text" defaultValue = {this.state.journalistInfo.cityOfResidence} name = "cityOfResidence" className="journalist-form-text"></input>
          <br/>
          <input type = "text" defaultValue = {this.state.journalistInfo.email} name = "email" className="journalist-form-text"></input>
          <br/>
          <input type = "text" defaultValue = {this.state.journalistInfo.phone} name = "phone" className="journalist-form-text"></input>
          <br/>
          <input type="hidden" name="id" value={this.jId}></input>
          <button type = "submit">Save</button>
        </form>
      </div>
    )
  }
}

export default JournalistEditFormContainer;
