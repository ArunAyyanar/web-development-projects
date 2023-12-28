import React from "react";

class Recap extends React.Component {
  constructor() {
    super();
    this.state = { message: "successfully" };
  }
  render() {
    return (
      <div>
        <h1>
          {" "}
          {this.props.name} : recaped - {this.state.message}
        </h1>
      </div>
    );
  }
}

export default Recap;
