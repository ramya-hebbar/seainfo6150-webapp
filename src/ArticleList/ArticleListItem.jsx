import React, { Component } from "react";
import PropTypes from "prop-types";
import SlugButton from './SlugButton'
import './ArticleListItem.module.css'

const ArticleListItem = props => {
	return (
		<article>
			<h1>{props.value.title}</h1>

			<p>{props.value.shortText}</p>

			<p><b><time dateTime={props.value.pubYear}>{props.value.pubDate}</time></b>
				<SlugButton buttonText={props.value.author} slug={props.value.slug} />
			</p>
		</article>
	);
};

export default ArticleListItem;