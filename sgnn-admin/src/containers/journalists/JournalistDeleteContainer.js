import React, { Component } from 'react';

class JournalistDeleteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {journalist: null}
    this.url = props.url;
    this.jId = props.jId;
    console.log("delete props", props);
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      // if(!this.state.journalist) return null;
      this.setState({journalist: data})
      console.log("this.state.journalist in JournalistDeleteContainer", this.state.journalist);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const urlj = "/journalists/" + event.target.id.value;
    console.log("handleSubmit delete event", event);
    fetch(urlj, {
      method: 'DELETE'
    })
    .then(response => response.json());
    // .then(() => {
    //   window.location = "/journalists";
    //
    // })
  }

  render() {
    if(!this.state.journalist) return null;
    return(
      <form onSubmit = { this.handleSubmit }>
      <button type = "submit">Delete journalist</button>
      </form>
    )
  }

}

export default JournalistDeleteContainer;
