import "./App.css";
import ClassComponent from "./components/ClassComponents";
import FunctionComponent from "./components/FunctionalComponents";
import { useState } from "react";

function App() {
  const author = "rk";

  const [name, setName] = useState("DT");
  return (
    <div className="App">
      <p>Class Components</p>
      <ClassComponent />
      <br />

      <p>Functional Component</p>
      {/* <FunctionComponent name="DevTown" age={20} author={author} /> */}
      <FunctionComponent
        name={name}
        age={20}
        author={author}
        setName={setName}
      />
    </div>
  );
}

export default App;
