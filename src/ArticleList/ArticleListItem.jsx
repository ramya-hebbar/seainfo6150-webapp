import React from "react";
import PropTypes from "prop-types";


const ArticleListItem = props => {

	return (
		<html lang="en">

		<head>
			<meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Week-4</title>
		</head>

		<body>
			
			<h4>{props.value.title}</h4>

			<p>{props.value.shortText}</p>

			<p><time dateTime={props.value.pubYear}>{props.value.pubDate}</time> 
				<button onClick={() => alert(props.value.slug)}>
	    			show article slug
	  			</button>
	  		</p>
			
		</body>

		</html>
	);
}


export default ArticleListItem;