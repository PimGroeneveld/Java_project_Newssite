import React from 'react';

const JournalistSingleDetail = props => {
  if(!props.journalist) return null;
  const url = "/journalists/" + props.journalist.id
  console.log("single detail props.journalist", props.journalist);
  return(
    <div className = "journalist-detail">
      <a href = {url}>
        <img src = { process.env.PUBLIC_URL + '/images/woman.jpg' } alt = "journo"></img>
      </a>
      <p>Name: { props.journalist.name }</p>
      <p>City of residence: { props.journalist.cityOfResidence }</p>
      <p>Email: { props.journalist.email}</p>
      <p>Phone number: { props.journalist.phone}</p>
    </div>
  )
}

export default JournalistSingleDetail;
