import React from 'react';
import prettyDate from '../../helpers/Date';
import ViewCountBox from '../articles/ViewCountBox';

const ArticlePreview = props => {
  return(
    <div className = "article-preview">
      <a href = { "/articles/" + props.article.id }>
        <h3>{ props.article.headline }</h3>
        <p id = "preview-date" className = "preview-date"> { prettyDate(props.article.publishDate) }</p>
        <ViewCountBox count = { props.article.viewCount } />
        <img src = { process.env.PUBLIC_URL + props.article.imageUrl } alt = "preview"></img>
        <p>{ props.article.summary }</p>

      </a>
    </div>
  )
}

export default ArticlePreview;
