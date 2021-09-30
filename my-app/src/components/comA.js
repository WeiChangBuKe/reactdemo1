import React from 'react';
import Composer from "./Composer"
import Ani from "./Ani"
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
          <Composer play={()=>this.state.func()}></Composer>
          <Ani register={this.handleRegister}></Ani> 
      </div>;
    }
  }
export default ComA
