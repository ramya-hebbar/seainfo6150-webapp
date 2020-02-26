import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <section>
      <ul className={styles.container}>
        {props.articles.map(article => (
          <li className={styles.list} key={article.slug}>
            <ArticleListItem article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
