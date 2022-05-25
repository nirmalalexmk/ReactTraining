import React from "react";
var a = 10;
var b = 100;
let c = {
  backgroundColor: "green",
  width: 300,
  height: 300
};



export default class Akash extends React.Component{

  showContent = () => {
    a = 20;
    b = 500;
    console.log(a);
    console.log(b);
  }

  render(){
    b = 200;
    return(
      <div 
        style={{
          backgroundColor: a,
          width: 300,
          height: 300
        }}
      >
        Hello world
        <button onClick={this.showContent}>
          click me 
        </button>
        {a}
        {b}
      </div>
    )
  }
}