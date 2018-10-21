import React from 'react';

const Article = (props) => {

  function handleRowClick(event){
    props.onRowClick(props.article.id);
  }

  return(
      <tr onClick={handleRowClick}>
          <td className="article-number-element"  value={props.article.id}>{props.index+1}</td>
          <td className="article-headline-element">{props.article.headline}</td>
          <td className="article-date-element">{props.article.publishDate}</td>
          <td className="article-region-element">{props.article.region.regionName}</td>
      </tr>
  )

}

export default Article;
