import React from "react";
import Title from "./Title";
import Employees from "./Employees";
import MyClock from "./MyClock";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <MyClock />
        <Employees />
      </div>
    );
  }
}

export default MainPage;
