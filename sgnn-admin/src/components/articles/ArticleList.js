import React from 'react';
import Article from './Article.js';

const ArticleList = (props) => {

  if(!props.articles) return null;

  const articlesOptions = props.articles.map((article, index) => {
    return (
        <Article key={index} article={article} index={index} onRowClick={props.onRowClick}/>
    )
  });

  return(
    <div className="article-list">
      <table id="articles-table">
        <thead>
          <tr>
            <th className="article-table-element"></th>
            <th className="article-headline-element">Headline</th>
            <th className="article-date-element"><a href="/articles/sortByDate">Published Date</a></th>
            <th className="article-region-element">Region</th>
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
