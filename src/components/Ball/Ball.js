import React, {Component} from 'react';

import './Ball.css'

class Ball extends Component{
  state = {
    //傾きの値
    pos_x: 1,
    pos_y: 1,
    //ボールの位置
    state_bottom: 0,
    state_left: 0
  };

  increment() {
    this.setState((prev) => {
      return {
        state_bottom: prev.count + 2
      }
    })
  }

  componentDidMount () {
    window.addEventListener("deviceorientation", event => {
        // ジャイロセンサーの値が変化
        this.setState({
            pos_x: event.beta,
            pos_y: event.gamma,
            pos_z: event.alpha
        });
        if( this.state.pos_x <= -10 && -80 <= this.state.pos_x ){
          this.setState({
            state_bottom: this.state.state_bottom + 1
          })
        }
        console.log(this.state.state_bottom);
        console.log(this.state.pos_x);
    });
  }

  render(){
    var style = {
      bottom: this.state.state_bottom
    }
    return(
      <div className="ball" style={style}></div>
    );
  }
}
export default Ball;