import React from 'react';
import ArticlePreview from '../components/articles/ArticlePreview';

const ArticleList = props => {
  if(!props.articles) {
    return null
  }

  const articleElements = props.articles.map(article => {
    return <ArticlePreview key = { article.id } article = { article }></ArticlePreview>
  })

  return(
    <div className = "article-preview-list">
      { articleElements }
    </div>
  )
}

export default ArticleList;