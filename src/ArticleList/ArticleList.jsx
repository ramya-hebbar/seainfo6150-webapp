import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem';
import './ArticleList.module.css'

const ArticleList = props => {
  return (
    <body>
      <ul>
        {props.articles.map(article => (
          <li key={article.slug}><ArticleListItem value={article}/></li>
        ))}
      </ul>
    </body>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
