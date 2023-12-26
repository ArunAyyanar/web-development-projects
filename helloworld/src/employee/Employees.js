import React from "react";
import Employee from "./Employee";

class Employees extends React.Component {
  emps = [
    {
      id: 23,
      name: "arun",
      dept: "Dev",
    },
    {
      id: 14,
      name: "tamil",
      dept: "HR",
    },
    {
      id: 5,
      name: "raj",
      dept: "Dev",
    },
  ];

  render() {
    console.log("rendering employees");
    return (
      <div>
        <Employee name="arun" />
      </div>
    );
  }
}

export default Employees;
