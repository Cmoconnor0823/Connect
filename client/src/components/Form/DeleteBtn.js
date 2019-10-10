import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <span  {...props} style={{ float: "right", marginTop: 10, marginBottom: 10 }} className="btn delete-btn font-weight-bold btn-outline-dark" role="button" tabIndex="0">
      ✗
    </span>
  );
}


