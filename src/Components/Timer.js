import React from "react";
import "../App.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      div1Color: "red",
      div2Color: "green",
      div3Color: "grey",
    };
  }

  componentDidMount() {
    console.log("from component did mount");
    //start timer
    this.props.startTimer();
  }
  changeColor = (e) => {
    this.setState({ color: e.target.value });
  };
  setColor1 = (e) => {
    this.setState({ div1Color: this.state.color });
  };
  setColor2 = (e) => {
    this.setState({ div2Color: this.state.color });
  };
  setColor3 = (e) => {
    this.setState({ div3Color: this.state.color });
  };

  render() {
    return (
      <div id="main">
        <table>
          <tr>
            <td>
              <div
                id="div1"
                className="assignement4div"
                style={{ backgroundColor: this.state.div1Color }}
                onClick={this.setColor1}
              >
                <h3>1</h3>
              </div>
            </td>
            <td>
              <div
                id="div2"
                className="assignement4div"
                style={{ backgroundColor: this.state.div2Color }}
                onClick={this.setColor2}
              >
                <h3>2</h3>
              </div>
            </td>
            <td>
              <div
                id="div3"
                className="assignement4div"
                style={{ backgroundColor: this.state.div3Color }}
                onClick={this.setColor3}
              >
                <h3>3</h3>
              </div>
            </td>
            <tr>
              <input
                value={this.state.color}
                onChange={this.changeColor}
              ></input>
              <button
                onClick={() => {
                  this.setState({
                    div1Color: "red",
                    div2Color: "green",
                    div3Color: "grey",
                    color: "",
                  });
                }}
              >
                Reset Colors
              </button>
            </tr>
          </tr>
        </table>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.startTimer();
    console.log("from will unmount");
  }
}
