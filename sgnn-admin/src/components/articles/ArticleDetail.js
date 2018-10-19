import React from 'react';

const ArticleDetail = (props) => {

  const articleUrl = "/articles/"+props.article.id;

  return(
    <tr>
      <td className="article-number-element">{props.index}</td>
      <td className="article-headline-element">{props.article.headline}</td>
      <td className="article-date-element">{props.article.publishDate}</td>
      <td className="article-region-element">{props.article.region}</td>
    </tr>
  )

}

export default ArticleDetail;
