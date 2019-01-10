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

  move(){
  //縦方向の転がしモーション
    if( this.state.pos_x <= -10 && -80 <= this.state.pos_x ){
      this.setState({
        state_bottom: this.state.state_bottom + 3
      });
      console.log("katatata");
    } else if( this.state.pos_x >= 10 && 80 >= this.state.pos_x ) {
      this.setState({
        state_bottom: this.state.state_bottom - 3
      });
      console.log("katamuki");
    }
  //横方向の動きモーション
    if( this.state.pos_y >= 10 && 60 >= this.state.pos_y ) {
      this.setState({
        state_left: this.state.state_left + 3
      });
    } else if( this.state.pos_y <= -10 && -80 <= this.state.pos_y ) {
      this.setState({
        state_left: this.state.state_left - 3
      });
    }
  }

  componentDidMount () {
    window.addEventListener("deviceorientation", event => {
        // ジャイロセンサーの値が変化
        this.setState({
            pos_x: event.beta,
            pos_y: event.gamma,
            pos_z: event.alpha
        });
        console.log("Y:",this.state.state_left+"px");
    });
    this.interval = setInterval(() => this.move(), 1);  //1時間毎にstate内の時間を更新
  }

  render(){
    var style = {
      bottom: this.state.state_bottom + "px",
      left: this.state.state_left + "px"
    }
    return(
      <div className="ball" style={style}></div>
    );
  }
}
export default Ball;