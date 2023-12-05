import React from "react";

function FunctionClick() {
  function clickHandler() {
    alert("Function button was clicked");
    console.log("Function was log");
  }
  return <button onClick={clickHandler}>Function click</button>;
}
export default FunctionClick;
