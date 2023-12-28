import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
    };
  }
  componentDidMount() {
    //console.log("component did mount");
    setInterval(() => {
      this.setState({
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
      });
    }, 1000);
  }
  render() {
    //console.log("clock component rendering");
    const { hour, min, sec } = this.state;
    //console.log(hour, min, sec);
    return (
      <div className="clock">
        Clock : {hour}:{min}:{sec < 9 ? "0" + sec : sec}
      </div>
    );
  }
}
export default Clock;
