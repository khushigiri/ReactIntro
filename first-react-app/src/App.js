import "./App.css";
import ClassComponent from "./pages/ClassComponents";
import FunctionComponent from "./pages/FunctionalComponents";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BaseHoc from "./hoc/BaseHoc";

function App() {
  const author = "rk";

  const [name, setName] = useState("DT");
  return (
    // <div className="App">
    //   <p>Class Components</p>
    //   <ClassComponent />
    //   <br />

    //   <p>Functional Component</p>
    //   {/* <FunctionComponent name="DevTown" age={20} author={author} /> */}
    //   <FunctionComponent
    //     name={name}
    //     age={20}
    //     author={author}
    //     setName={setName}
    //   />
    // </div>

    <Routes>
      <Route
        path="/"
        element={
          <BaseHoc>
            <ClassComponent />
          </BaseHoc>
        }
      />
      <Route
        path="/functional-component"
        element={
          <BaseHoc>
            <FunctionComponent />
          </BaseHoc>
        }
        name={name}
        age={10}
        author={author}
        setName={setName}
      />
    </Routes>
  );
}

export default App;
