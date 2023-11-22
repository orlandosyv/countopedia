import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefend = this.handleDefend.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAttack = () => {
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return { count: newCount };
    });
  };
  handleDefend = () => {
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return { count: newCount };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefend();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return { count: 0 };
    });
  };

  render() {
    return (
      <div className=" row text-white text-center p-6">
        <h1>Game Score: {this.state.count}</h1>
        <p>you win at +10 points and lose at -10 points!</p>
        <p>Last Play:</p>
        <h3>Game Status: </h3>
        <div className="col-6 p-5">
          <img
            src={attack}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            alt=""
            className="p-4 rounded"
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 p-5">
          <img
            src={defend}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            alt=""
            className="p-4 rounded"
            onClick={this.handleDefend}
          />
        </div>

        <div className="col-12 offset-md-4 px-5 my-2">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random play
          </button>
        </div>
        <div className="col-12 offset-md-4 px-5">
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset play
          </button>
        </div>
      </div>
    );
  }
}
