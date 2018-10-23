import React, { Component } from 'react';
import JournalistList from '../../components/journalists/JournalistList';
import AddJournalistButton from '../../components/journalists/AddJournalistButton';

class JournalistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {journalists: []}
    this.url = props.url;
  }

  componentDidMount(){
    fetch(this.url).then((res) => res.json())
    .then((data) => {
      if(data._embedded){
        this.setState({journalists: data._embedded.journalists})
      } else {
        this.setState({journalists: [data]})
      }
    })
  }

  render() {
    return(
      <div className="journalist-container">
        <h1>Journalists</h1>
        <AddJournalistButton />
        <JournalistList journalists = { this.state.journalists } />
      </div>
    )
  }
}

export default JournalistContainer;
