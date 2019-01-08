import React, {Component} from 'react';

import './Test.css'

class Test extends Component{
  state = {
    pos_x: 0,
    pos_y: 0,
    pos_z: 0,
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
    return(
      <div>
        <div>x値：{this.state.pos_x}</div>
        <div>y値：{this.state.pos_y}</div>
        <div>z値：{this.state.pos_z}</div>
      </div>
    );
  }
}

export default Test;