import React from 'react';
import ComB from "./comB"
class ComA extends React.Component {
    constructor(props) {
        super(props) 
        this.state={func:()=>{}}
        this.handleRegister = this.handleRegister.bind(this);
    }
     
    handleRegister(func){
       console.log(" this.setState", func)
       this.setState({func});
    }
    render() {
      return <div>
          COMA
          <ComB register={this.handleRegister}></ComB>
          <button onClick={this.state.func}>run func</button>
      </div>;
    }
  }
export default ComA
