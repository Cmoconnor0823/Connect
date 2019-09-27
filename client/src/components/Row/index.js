// eslint-disable-next-line no-unused-vars
import React from "react";

function Row(props) {
	return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;