import React, {Component} from 'react';

import './Test.css'

class Test extends Component{
  state = {
    pos_x: 1,
    pos_y: 1,
    pos_z: 1,
};

componentDidMount () {
  window.addEventListener("deviceorientation", event => {
      // ジャイロセンサーの値が変化
      this.setState({
          pos_x: event.beta,
          pos_y: event.gamma,
          pos_z: event.alpha
      });
  });
}

  render(){
    var style = {
      transform: "rotate(" + this.state.pos_z + "deg)"
    }
    return(
      <div>
        <div>x値：{this.state.pos_x}</div>
        <div>y値：{this.state.pos_y}</div>
        <div>z値：{this.state.pos_z}</div>
        <div className="test" style={style}></div>
      </div>
    );
  }
}

export default Test;