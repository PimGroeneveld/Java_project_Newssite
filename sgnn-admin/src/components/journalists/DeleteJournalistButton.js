import React from "react";

const DeleteJournalistButton = props => {
  return (
    <div className = "delete-journalist-button">
      <a href = "/journalists/:id">Delete journalist</a>
    </div>
  )
}

export default DeleteJournalistButton;
