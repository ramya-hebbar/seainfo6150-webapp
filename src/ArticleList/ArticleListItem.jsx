import React from "react";
import PropTypes from "prop-types";


const ArticleListItem = props => {

	return (
		<div>
			
			<h4>{props.value.title}</h4>

			<p>{props.value.shortText}</p>

			<p><time dateTime={props.value.pubYear}>{props.value.pubDate}</time> 
				<button onClick={() => alert(props.value.slug)}>
	    			show article slug
	  			</button>
	  		</p>
	  		
		</div>
	);
}


export default ArticleListItem;