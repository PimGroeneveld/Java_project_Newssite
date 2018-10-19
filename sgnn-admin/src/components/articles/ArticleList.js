import React from 'react';
import ArticleDetail from './ArticleDetail.js';

const ArticleList = (props) => {

  const articlesOptions = props.articles.map((article, index) => {
    return (
      <ArticleDetail article={article} index={index}/>
    )
  });

  return(
    <div className="article-list">
      {/* <ol className="articles">
        {articlesOptions}
      </ol> */}
      <table id="articles-table">
        <thead>
          <tr>
            <td className="article-number-element"></td>
            <td className="article-headline-element">Headline</td>
            <td className="article-date-element">Published Date</td>
            <td className="article-region-element">Region</td>
          </tr>
        </thead>
        {articlesOptions}
      </table>
    </div>
  )
}

export default ArticleList;
