import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefend = this.handleDefend.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAttack() {
    alert("Attack clicked");
    this.setState({ count: this.state.count + 1 });
  }
  handleDefend() {
    alert("Defend clicked");
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div className=" row text-white p-3">
        <h1>Counter: {this.state.count}</h1>
        <div className="p-4 m-6">
          <button onClick={this.handleAttack} style={{ width: "200px" }}>
            +1
          </button>
          <button onClick={this.handleDefend} style={{ width: "200px" }}>
            -1
          </button>
        </div>
      </div>
    );
  }
}
