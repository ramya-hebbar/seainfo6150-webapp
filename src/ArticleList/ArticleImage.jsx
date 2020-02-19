import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = props => {
    return (
        <div><img class={styles.articleImage} src={props.url} alt="article image" /></div>
    );
};

ArticleImage.propTypes = {
    url : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
};

export default ArticleImage;