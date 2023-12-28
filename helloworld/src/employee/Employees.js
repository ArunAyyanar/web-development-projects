import React from "react";
import Employee from "./Employee";

class Employees extends React.Component {
  constructor() {
    super();
    this.state = [
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
        id: 2,
        name: "raj",
        dept: "Dev",
      },
    ];
  }

  render() {
    return (
      <div>
        <p
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bolder",
            fontSize: "25px",
          }}
        >
          Id &nbsp; Name &nbsp; Dept
        </p>
        {this.state.map((emp) => {
          return <Employee employee={emp} />;
        })}
      </div>
    );
  }
}

export default Employees;
