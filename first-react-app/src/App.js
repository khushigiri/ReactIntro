import "./App.css";
import ClassComponent from "./components/ClassComponents";
import FunctionComponent from "./components/FunctionalComponents";

function App() {
  return (
    <div className="App">
      <p>Class Components</p>
      <ClassComponent />
      <br />

      <p>Functional Component</p>
      <FunctionComponent />
    </div>
  );
}

export default App;
