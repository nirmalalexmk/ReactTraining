import { useEffect, useState } from "react";
import "../App.css";

export default function Timer(props) {
  //       color: "",
  //       div1Color: "red",
  //       div2Color: "green",
  //       div3Color: "grey",
  const [color, setColor] = useState("");
  const [div1Color, setdiv1Color] = useState("red");
  const [div2Color, setdiv2Color] = useState("green");
  const [div3Color, setdiv3Color] = useState("grey");
  useEffect(() => {
    console.log("from component did mount");
    //     //start timer
    props.startTimer();
  }, []);
  useEffect(() => {
    return () => {
      props.startTimer();
    };
  }, []);

  const changeColor = (e) => {
    console.log(color);
    setColor(e.target.value);
  };
  const setColor1 = (e) => {
    setdiv1Color(color);
  };
  const setColor2 = (e) => {
    setdiv2Color(color);
  };
  const setColor3 = (e) => {
    setdiv3Color(color);
  };
  return (
    <div id="main">
      <table>
        <tr>
          <td>
            <div
              id="div1"
              className="assignement4div"
              style={{ backgroundColor: div1Color }}
              onClick={setColor1}
            >
              <h3>1</h3>
            </div>
          </td>
          <td>
            <div
              id="div2"
              className="assignement4div"
              style={{ backgroundColor: div2Color }}
              onClick={setColor2}
            >
              <h3>2</h3>
            </div>
          </td>
          <td>
            <div
              id="div3"
              className="assignement4div"
              style={{ backgroundColor: div3Color }}
              onClick={setColor3}
            >
              <h3>3</h3>
            </div>
          </td>
          <tr>
            <input value={color} onChange={changeColor}></input>
            <button
              onClick={() => {
                setColor1("red");
                setColor2("green");
                setColor3("grey");
                setColor("");
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

// import React from "react";
// import "../App.css";

// export default class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "",
//       div1Color: "red",
//       div2Color: "green",
//       div3Color: "grey",
//     };
//   }

//   componentDidMount() {
//     console.log("from component did mount");
//     //start timer
//     this.props.startTimer();
//   }
//   changeColor = (e) => {
//     this.setState({ color: e.target.value });
//   };
//   setColor1 = (e) => {
//     this.setState({ div1Color: this.state.color });
//   };
//   setColor2 = (e) => {
//     this.setState({ div2Color: this.state.color });
//   };
//   setColor3 = (e) => {
//     this.setState({ div3Color: this.state.color });
//   };

//   render() {
//     return (
//       <div id="main">
//         <table>
//           <tr>
//             <td>
//               <div
//                 id="div1"
//                 className="assignement4div"
//                 style={{ backgroundColor: this.state.div1Color }}
//                 onClick={this.setColor1}
//               >
//                 <h3>1</h3>
//               </div>
//             </td>
//             <td>
//               <div
//                 id="div2"
//                 className="assignement4div"
//                 style={{ backgroundColor: this.state.div2Color }}
//                 onClick={this.setColor2}
//               >
//                 <h3>2</h3>
//               </div>
//             </td>
//             <td>
//               <div
//                 id="div3"
//                 className="assignement4div"
//                 style={{ backgroundColor: this.state.div3Color }}
//                 onClick={this.setColor3}
//               >
//                 <h3>3</h3>
//               </div>
//             </td>
//             <tr>
//               <input
//                 value={this.state.color}
//                 onChange={this.changeColor}
//               ></input>
//               <button
//                 onClick={() => {
//                   this.setState({
//                     div1Color: "red",
//                     div2Color: "green",
//                     div3Color: "grey",
//                     color: "",
//                   });
//                 }}
//               >
//                 Reset Colors
//               </button>
//             </tr>
//           </tr>
//         </table>
//       </div>
//     );
//   }

//   componentWillUnmount() {
//     this.props.startTimer();
//     console.log("from will unmount");
//   }
// }
