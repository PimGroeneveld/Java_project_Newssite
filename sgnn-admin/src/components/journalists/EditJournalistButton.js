import React from "react";

const EditJournalistButton = props => {
  if(!props.journalistUrl) return null;
  const url = props.journalistUrl + "/edit";
  return (
    <div className = "edit-journalist-button-wrapper">
      <a className = "edit-journalist-button" href = {url} >Edit journalist</a>
    </div>
  )
}

export default EditJournalistButton;
