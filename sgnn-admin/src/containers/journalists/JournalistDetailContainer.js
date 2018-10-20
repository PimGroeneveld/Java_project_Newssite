import React, { Component } from 'react';
import JournalistSingleDetail from '../../components/journalists/JournalistSingleDetail';

class JournalistDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {journalist: null}
    this.url = props.url;
    console.log("journalistSingleDetail props.url", props.url);
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      console.log("detailcontainer: componentDidMount data", data)
      this.setState({journalist: data})
    })
  }

  render() {
    return(
      // add edit and remove button in this div
      <div className="journalist-container">
        <h1>Journalist info:</h1>
        <JournalistSingleDetail journalist = { this.state.journalist } />
      </div>
    )
  }
}

export default JournalistDetailContainer;
