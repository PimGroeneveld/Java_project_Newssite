import React from 'react';

const JournalistDetail = props => {
  console.log("props in JournalistDetail:", props.journalist);
  const url = "/journalists/" + props.journalist.id
  return(
    <div className = "journalist-detail">
      <a href = {url}>
        <img src = { process.env.PUBLIC_URL + '/images/woman.jpg' } alt = "journo"></img>
      </a>
      <p>{ props.journalist.name }</p>
    </div>
  )
}

export default JournalistDetail;
