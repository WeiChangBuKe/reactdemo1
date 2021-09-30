import React from 'react';
import Composer from "./Composer"
import Ani from "./Ani"
class ComB extends React.Component {
    render() {
      return <div>
          <Composer play={()=>{
              this.refs.aniRef.play();
          }}></Composer>
          <Ani ref={"aniRef"}></Ani> 
      </div>;
    }
  }
export default ComB