import React from "react";
import PropTypes from "prop-types";
import './SlugButton.module.css'

const SlugButton = (props) => {

    const buttonWasClicked = event => alert(props.slug);

    return (
        <button onClick={buttonWasClicked}>
            {props.buttonText}
        </button>
    );
};

SlugButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
}

export default SlugButton;