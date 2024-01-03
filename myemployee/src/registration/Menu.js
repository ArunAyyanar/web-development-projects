import React from "react";

class Menu extends React.Component {
  navigator(e) {
    console.log("clicked", e);
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="All Emp"
          onClick={this.navigator.bind(this)}
        />
        <button onClick={this.navigator.bind(this)}>Add</button>
        <button onClick={this.navigator.bind(this)}>Update</button>
        <button onClick={this.navigator.bind(this)}>Find</button>
        <button onClick={this.navigator.bind(this)}>Delete</button>
      </div>
    );
  }
}

export default Menu;
