import React from 'react';

const ArticlePreview = props => {
  return(
    <div className = "article-preview">
      <a href = { "/articles/" + props.article.id }>
        <h3>{ props.article.headline }</h3>
        <img src = { process.env.PUBLIC_URL + props.article.imageUrl } alt = "preview"></img>
        <p>{ props.article.summary }</p>
      </a>
    </div>
  )
}

export default ArticlePreview;