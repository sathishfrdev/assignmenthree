import React from "react";

function Hello() {
  let textInput = React.createRef();  // React use ref to get input value

  let onOnclickHandler = (e) => {
    console.log(textInput.current.value); 
  };

  return (
    <div className="App">
      <input ref={textInput} type="text" />
      <button onClick={onOnclickHandler}>Click Here</button>
    </div>
  );
}

export default Hello;