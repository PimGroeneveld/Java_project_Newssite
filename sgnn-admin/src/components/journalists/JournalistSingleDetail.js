import React from 'react';

const JournalistSingleDetail = props => {
  console.log("props in JournalistSingleDetail:", props.journalist);
  if(!props.journalist) return null;
  const url = "/journalists/" + props.journalist.id
  return(
    <div className = "journalist-detail">
      <a href = {url}>
        <img src = { process.env.PUBLIC_URL + '/images/woman.jpg' } alt = "journo"></img>
      </a>
      <p>{ props.journalist.name }</p>
      <p>{ props.journalist.cityOfResidence }</p>
      <p>{ props.journalist.email}</p>
      <p>{ props.journalist.phone}</p>
    </div>
  )
}

export default JournalistSingleDetail;
