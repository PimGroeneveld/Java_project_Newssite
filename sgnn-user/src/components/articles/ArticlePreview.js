import React from 'react';

const ArticlePreview = props => {
  return(
    <div className = "article-preview">
      <a href = { "/articles/" + props.article.id }>
        <img src = { process.env.PUBLIC_URL + props.article.imageUrl }></img>
        <p>{ props.article.summary }</p>
      </a>
    </div>
  )
}

export default ArticlePreview;