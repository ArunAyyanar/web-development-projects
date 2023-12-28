import React from "react";
import "./Employee.css";

class Employee extends React.Component {
  render() {
    //console.log(this.props);
    const { employee } = this.props;
    return (
      <div id="myId">
        <p>
          {employee.id} &nbsp; {employee.name} &nbsp; {employee.dept}
        </p>
      </div>
    );
  }
}

export default Employee;
