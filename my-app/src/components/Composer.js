import React from "react";
class Composer extends React.Component {

  constructor(props) {
    super(props)
    console.log("props",props);
   this.state={play  : props.play};
 
  }
 
  render() {
    return <div>
      Composer Start
<button onClick={this.state.play}>btn</button>
      Composer End
      </div>;
  }
}
export default Composer;
