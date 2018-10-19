import React from 'react';

const JournalistDetail = props => {
  return(
    <div className = "journalist-detail">
      <a href = "/articles"><img src = { process.env.PUBLIC_URL + '/images/woman.jpg' } alt = "journo"></img></a>
      <p>{ props.journalist.name }</p>
    </div> 
  )
}

export default JournalistDetail;