import React from 'react';
import Article from './Article.js';

const ArticleList = (props) => {

  const articlesOptions = props.articles.map((article, index) => {
    console.log("in");
    return (
        <Article key={index} article={article} index={index} onRowClick={props.onRowClick}/>
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
        <tbody>
          {articlesOptions}
        </tbody>
      </table>
    </div>
  )
}

export default ArticleList;
