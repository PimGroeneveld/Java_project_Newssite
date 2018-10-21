import React, { Component } from 'react';
import JournalistSingleDetail from '../../components/journalists/JournalistSingleDetail';
import DeleteJournalistButton from "../../components/journalists/DeleteJournalistButton.js";
import EditJournalistButton from "../../components/journalists/EditJournalistButton.js";
import BackToAllButton from "../../components/journalists/BackToAllButton.js";

class JournalistDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {journalist: null}
    this.url = props.url;
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      this.setState({journalist: data})
    })
  }

  // delete(journalistInfo){
  //   console.log(journalistInfo);
  //  const newState = this.state.journalist.slice();
  //    if (newState.indexOf(journalistInfo) > -1) {
  //    newState.splice(newState.indexOf(journalistInfo), 1);
  //    this.setState({journalist: newState})
  //  }
  // }

  // renderDelete(){
  //   const listItem = this.state.data.map((item)=>{
  //     return <div key={item.id}>
  //       <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
  //     </div>
  //   })
  //   return <div>
  //     {listItem}
  //   </div>
  // }

  render() {
    return(
      // add edit and remove button in this di
      <div className="journalist-container">
        <h1>Journalist info:</h1>

        <DeleteJournalistButton journalistUrl = { this.url }/>
        <EditJournalistButton journalistUrl = { this.url }/>
        <JournalistSingleDetail journalist = { this.state.journalist } />
        <BackToAllButton />
      </div>
    )
  }
}

export default JournalistDetailContainer;
