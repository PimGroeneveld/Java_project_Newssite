import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import JournalistSingleDetail from '../../components/journalists/JournalistSingleDetail';
import EditJournalistButton from "../../components/journalists/EditJournalistButton.js";
import BackToAllButton from "../../components/journalists/BackToAllButton.js";

class JournalistDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journalist: null
    }
    this.url = props.url;
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    console.log("detail props", props);
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      this.setState({journalist: data})
    })
  }

  handleDeleteClick(event){
    event.preventDefault();
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to remove this journalist?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            fetch(this.url,{
              method: "DELETE",
              headers: {'Content-Type': 'application/json'},
            })
            .then( () => {
              window.location = '/journalists';
            })
          }
        },
        {
          label: 'No',
          onClick: () => <Redirect to={this.url}/>
        }
      ]
    })
  }

  render() {
    if(!this.state.journalist) return null;
    return(
      <div className="journalist-container">
        <h1>Journalist info:</h1>
        <EditJournalistButton journalistUrl = { this.url }/>
        <JournalistSingleDetail journalist = { this.state.journalist } />
        <a href="." onClick={this.handleDeleteClick}>Delete</a>
        <br/>
        <BackToAllButton />
      </div>
    )
  }
}

export default JournalistDetailContainer;
