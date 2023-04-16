import React from "react";
 
const sayHello = () => {
    alert ('Hello World')
};
const Third = () => {
  return (
    <button onClick = {sayHello}>*Say Hello*</button>
  );
}

export default Third;