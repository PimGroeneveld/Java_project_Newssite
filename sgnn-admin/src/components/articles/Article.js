import React from 'react';
import moment from 'moment';

const Article = (props) => {

  function handleRowClick(event){
    props.onRowClick(props.article.id);
  }

  let formattedDate = moment(props.article.publishDate).format("DD/MM/YY");

  return(
      <tr onClick={handleRowClick}>
          <td className="article-number-element"  value={props.article.id}>{props.index+1}</td>
          <td className="article-headline-element">{props.article.headline}</td>
          <td className="article-date-element">{formattedDate}</td>
          <td className="article-region-element">{props.article.region.regionName.split('_').join(' ')}</td>
      </tr>

  )

}

export default Article;
