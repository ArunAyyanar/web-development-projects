import React from "react";

class Employee extends React.Component {
  render() {
    return (
      <div>
        <p>Each Employee details {this.props.name}</p>
      </div>
    );
  }
}

export default Employee;
