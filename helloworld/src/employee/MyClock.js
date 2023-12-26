import React from "react";

class MyClock extends React.Component {
  constructor() {
    super();
    this.state = new Date();
  }

  render() {
    return <div>Clock : {2 + 2}</div>;
  }
}

export default MyClock;
