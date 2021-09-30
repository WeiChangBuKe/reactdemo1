import React from "react";
class Ani extends React.Component {0

  constructor(props) {
    super(props)
    console.log("props",props);
   this.state={clickedCount :0};
   props.register&&  props.register(() => {
        this.play();
      });
  }
 
  play() {
    console.log("played");
 // .//  alert("play")
    this.setState({clickedCount : this.state.clickedCount+1});
  }
  render() {
    return <div>
      Ani Start<br/>
      &lt;{this.state.clickedCount}&gt;<br/>
      Ani End<br/>
      </div>;
  }
}
export default Ani;
