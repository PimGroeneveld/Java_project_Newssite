import React from 'react';

const JournalistSingleDetail = props => {
  if(!props.journalist) return null;
  const url = "/journalists/" + props.journalist.id
  return(
    <div className = "journalist-detail">
      <a href = {url}>
        <img src = { process.env.PUBLIC_URL + '/images/anonymous.jpg' } alt = "journalist"></img>
      </a>
      <div className="single-detail-container">
        <h3 >Name: &nbsp; &nbsp; &nbsp;<p className="single-content">{ props.journalist.name }</p></h3>

        <h3 >City of residence : <p className="single-content"> { props.journalist.cityOfResidence }</p></h3>

        <h3 >Email : <p className="single-content"> { props.journalist.email}</p></h3>

        <h3 >Phone number : <p className="single-content"> { props.journalist.phone}</p></h3>
      </div>
    </div>
  )
}

export default JournalistSingleDetail;
