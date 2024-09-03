import React, { useState } from "react";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>This is Functional Component</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment/add by 1
      </button>
      <br />
      <br />
      <button onClick={reduceCount}>Click here to decrement</button>
      <h2>{count}</h2>
      <h4>
        My Company is {props.name}, it is of {props.age} years old and the
        author is {props.author}.
      </h4>
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => props.setName(changeName)}>Change name</button>
    </div>
  );
};

export default FunctionComponent;
