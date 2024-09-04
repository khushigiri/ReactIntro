import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {
  constructor(props) {
    //super should be written first in any constructor.
    super(props);

    this.state = {
      name: "Khushi",
      age: "20",
    };
  }

  render() {
    return (
      <>
        <p>This is class Components</p>;
      </>
    );
  }
}

export default BaseHoc(ClassComponent);
