import React, { Component } from 'react';
import JournalistSingleDetail from '../../components/journalists/JournalistSingleDetail';
import DeleteJournalistButton from "../../components/journalists/DeleteJournalistButton.js";
import EditJournalistButton from "../../components/journalists/EditJournalistButton.js";
import BackToAllButton from "../../components/journalists/BackToAllButton.js";
import JournalistDeleteContainer from "./JournalistDeleteContainer.js";

class JournalistDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {journalist: null}
    this.url = props.url;
    console.log("detail props", props);
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      this.setState({journalist: data})
      // console.log("this.state.journalist", this.state.journalist);
    })
  }

  render() {
    if(!this.state.journalist) return null;
    return(
      <div className="journalist-container">
        <h1>Journalist info:</h1>
        <EditJournalistButton journalistUrl = { this.url }/>
        <JournalistSingleDetail journalist = { this.state.journalist } />
        <JournalistDeleteContainer />
        <br/>
        <BackToAllButton />
      </div>
    )
  }
}

export default JournalistDetailContainer;
