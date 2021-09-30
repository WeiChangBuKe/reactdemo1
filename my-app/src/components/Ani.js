import React from "react";
class Ani extends React.Component {0

  constructor(props) {
    super(props)
    console.log("props",props);
   this.state={played :0};
    props.register(() => {
        this.play();
      });
  }
 
  play() {
    console.log("played");
 // .//  alert("play")
    this.setState({played : this.state.played+1});
  }
  render() {
    return <div>
      Ani Start
      {this.state.played}
      Ani End
      </div>;
  }
}
export default Ani;
