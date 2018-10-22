import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import JournalistSingleDetail from '../../components/journalists/JournalistSingleDetail';
import EditJournalistButton from "../../components/journalists/EditJournalistButton.js";

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
    const articlesUrl = this.url + "/articles"
    return(
      <div className="journalist-container">
        <h1>Journalist Details</h1>
        <EditJournalistButton journalistUrl = { this.url }/>
        <JournalistSingleDetail journalist = { this.state.journalist } />
        <div className = "back-delete-journalist-wrapper">
        <a className= "delete-journalist-button" href="." onClick={this.handleDeleteClick}>Delete</a>
          <a className = "show-all-button" href = {articlesUrl}>Get articles</a>
        <a className = "show-all-button" href = "/journalists" >Back to all journalists</a>
        </div>
      </div>
    )
  }
}

export default JournalistDetailContainer;
