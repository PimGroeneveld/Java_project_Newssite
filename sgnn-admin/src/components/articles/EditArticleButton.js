import React from "react";

const EditArticleButton = props => {
  if(!props.articleUrl) return null;
  const url = props.articleUrl + "/edit";
  return (
    <div className = "edit-article-button">
      <a href = {url} >Edit Article</a>
    </div>
  )
}

export default EditArticleButton;
