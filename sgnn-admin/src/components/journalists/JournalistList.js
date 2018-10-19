import React from 'react';
import JournalistDetail from './JournalistDetail';

const JournalistList = props => {
  const journalistElements = props.journalists.map((journalist) => {
    return(
      <li key = { journalist.id } >
        <JournalistDetail journalist = { journalist } />
      </li>
    )
  })

  return(
    <div className = "journalist-list">
      { journalistElements }
    </div>
  )
}

export default JournalistList;