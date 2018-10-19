import React from 'react';

const MainArticle = props => {
  console.log(props.article);
  if(!props.article) { return null }
  
  return(
    <div className = "main-article">
      <img className = "main-pic" src = {process.env.PUBLIC_URL + props.article.imageUrl } alt = "main story"></img>
      <div className = "main-text">
        <h1>{ props.article.headline }</h1>
        <p>{ props.article.summary }</p>
      </div>
    </div>
  )
}

export default MainArticle;