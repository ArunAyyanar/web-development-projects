import React from "react";
import Title from "./Title";
import Employees from "./Employees";
import Clock from "./Clock";
import "../employee/Main.css";

class MainPage extends React.Component {  
  render() {
    return (
      <div>
        <Clock />
        <Title />
        <Employees />
      </div>
    );
  }
}

export default MainPage;
