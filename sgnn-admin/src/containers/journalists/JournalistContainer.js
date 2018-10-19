import React, { Component } from 'react';
import JournalistList from '../../components/journalists/JournalistList';
import AddJournalistButton from '../../components/journalists/AddJournalistButton';

class JournalistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journalists: []
    }
  }

  componentDidMount() {
    this.setState({ journalists: 
      [
        { name: 'bob'},
        { name: 'dave'},
        { name: 'pim' },
        { name: 'sithara' }
      ] 
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