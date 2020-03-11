import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";

const ArticleListItem = props => {
  return (
    <div className={styles.container}>
		<div id={styles.image}>
			<ArticleImage url={props.article.image._url} title={props.article.title} />
		</div>		
		<div id={styles.content}>
			<h3 className={styles.title}>{props.article.title}</h3>
			<p className={styles.shortText}>{props.article.shortText}</p>
			<time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
			<p id={styles.button}>
				<SlugButton slug={props.article.slug} buttonText={props.article.author} />
			</p>
	  	</div>
    </div>
  );
};

export default ArticleListItem;
