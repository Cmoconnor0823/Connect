import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginTop: 10, marginBottom: 10 }} className="btn font-weight-bold btn-outline-dark">
      {props.children}
    </button>
  );
}
