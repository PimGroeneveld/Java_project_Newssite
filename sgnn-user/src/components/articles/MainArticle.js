import React from 'react';
import prettyDate from '../../helpers/Date';
import ViewCountBox from '../articles/ViewCountBox';

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
        <p id = "preview-date" className = "preview-date">{ prettyDate(props.article.publishDate) }</p>
        <ViewCountBox count = { props.article.viewCount } />
        <p>{ props.article.summary }</p>
      </div>
    </div>
  )
}

export default MainArticle;
