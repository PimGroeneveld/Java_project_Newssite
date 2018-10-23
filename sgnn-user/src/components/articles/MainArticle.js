import React from 'react';
import prettyDate from '../../helpers/Date';

const MainArticle = props => {
  if(!props.article) { return null }

  return(
    <div className = "main-article">
      <div className = "main-pic">
        <a href = { "/articles/" + props.article.id } >
          <img 
            src = {process.env.PUBLIC_URL + props.article.imageUrl } 
            alt = "main story">
          </img>
        </a>
      </div>
      <div className = "main-text">
        <h1>{ props.article.headline }</h1>
        <p className = "preview-date">{ prettyDate(props.article.publishDate) }</p>
        <p>{ props.article.summary }</p>
      </div>
    </div>
  )
}

export default MainArticle;