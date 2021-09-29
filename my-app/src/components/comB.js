import React from "react";
class ComB extends React.Component {

  constructor(props) {
    super(props)
    console.log("props",props);
    this.state={register  : props.register};

  }
  componentWillMount (){
    
      const {register} = this.state;
      console.log("sgtate",register);
      register && register(() => {
        this.play();
      });
  }
  play() {
    console.log("played");
    alert("play")
  }
  render() {
    return <div>COMB</div>;
  }
}
export default ComB;
