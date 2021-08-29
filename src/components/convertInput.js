import React from "react";

function ConvertInput(props) {
  return (
    <input
      className="container__input"
      onChange={props.onChange}
      maxLength="4"
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}

export default ConvertInput;
